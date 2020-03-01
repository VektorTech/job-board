import registerUser from './controllers/registerUser';
import registerCompany from './controllers/registerCompany';
import signinUser from './controllers/signinUser';
// import signinCompany from './controllers/signinCompany';
import JWT from 'jsonwebtoken';
import { REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET } from '../../api/config';

const generateAccessToken = (data) => {
  return JWT.sign(data, ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn:"1m" });
}

export const register = (req, res, next) => {
  const { type } = req.body;

  switch(type){
    case "company": registerCompany(req.body); break;
    case "user": registerUser(req.body); break;
  }

  return next();
}

export const token = (req, res, next) => {
  try{
    JWT.verify(req.body.token, REFRESH_TOKEN_SECRET, (err, decoded) => {
      if(err) throw err;
      req.token = generateAccessToken(decoded);
    });
  } catch(err) {
    res.json({"err":"err"});
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
        const accessToken = generateAccessToken({ name });

        // console.log(req.cookies);
        const future = new Date(new Date().getTime() + (1000*60*60*24*30*3));
        res.cookie('refresh-token', refreshToken, { httpOnly:true, path: '/', expiration: future })
        res.end(accessToken);

      }).catch(console.log);
      break;
  }
  return next();
}