import registerUser from './controllers/registerUser';
import registerCompany from './controllers/registerCompany';
import signinUser from './controllers/signinUser';
// import signinCompany from './controllers/signinCompany';
import JWT from 'jsonwebtoken';
import { REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET } from '../../api/config';

export const register = (req, res, next) => {
  const { type } = req.body;

  switch(type){
    case "company": registerCompany(req.body); break;
    case "user": registerUser(req.body); break;
  }

  return next();
}

export const signin = (req, res, next) => {
  const { type } = req.body;

  switch("user"){
    // case "company": signinCompany(req.body); break;
    case "user": 
      signinUser(req.body).then( ({email, password, name, sex, phone, address, avatar}) => {   
        console.log(res._header);
        const refreshToken = JWT.sign({ name }, REFRESH_TOKEN_SECRET, { algorithm: 'HS256' });
        const accessToken = JWT.sign({ name }, ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn:"1m" });

        // // console.log(req.cookies);
        res.cookie('refresh_token', refreshToken, { httpOnly:true, path: '/api/signin', expiration: new Date((60000*60*24*7*4*3)+Date.now()) })
           .json({'access_token': accessToken});

      }).catch(console.log);
      break;
  }
  return next();
}