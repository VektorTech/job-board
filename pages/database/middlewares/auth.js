import registerUser from './controllers/registerUser';
import registerCompany from './controllers/registerCompany';
import signinUser from './controllers/signinUser';
// import signinCompany from './controllers/signinCompany';
import JWT, { decode } from 'jsonwebtoken';
import { REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET_COMP } from '../../api/config';

const $_SESSION = {};

const generateAccessToken = (data) => {
  return JWT.sign(data, ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn:"1m" });
}

export const getSession = (req, res, next) => {
  console.log($_SESSION)
  switch(req.body.user){
    case "user":
      try {
        JWT.verify(req.body.refresh_token, REFRESH_TOKEN_SECRET, (err, decoded) => {
          if (err || req.body.user !== 'user') throw err;

          JWT.verify(req.body.access_token, ACCESS_TOKEN_SECRET, (err) => {
            if (err) req.token = generateAccessToken({ 'id': decoded.id, 'name': decoded.name, 'user': 'user' });
            req.session = $_SESSION[decoded.id] || {};
          });
        });
      } catch(err) {
        req.err = err.message;
      }
  }
  return next();
}

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

  switch(type){
    // case "company": signinCompany(req.body); break;
    case "user": 
      signinUser(req.body).then( data => {
        $_SESSION[data.id] = data;  

        const refreshToken = JWT.sign({ 'id': data.id, 'name': data.name, 'email': data.email }, REFRESH_TOKEN_SECRET, { algorithm: 'HS256', expiresIn:"14d" });
        const accessToken = generateAccessToken({ 'id': data.id, 'name': data.name, 'user': 'user' });

        // console.log(req.cookies);
        const future = new Date(new Date().getTime() + (1000*60*60*24*30*3));
        res.cookie('refresh-token', refreshToken, { httpOnly:true, path: '/', expiration: future })
        res.end(accessToken);

      }).catch(console.log);
      break;
  }
  return next();
}