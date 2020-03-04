import registerUser from './controllers/registerUser';
import registerCompany from './controllers/registerCompany';
import signinUser from './controllers/signinUser';
import signinCompany from './controllers/signinCompany';
import JWT, { decode } from 'jsonwebtoken';
import { 
  ACCESS_TOKEN_SECRET,
  COMPANY_ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET, 
  COMPANY_REFRESH_TOKEN_SECRET } from '../../api/config';

const $_SESSION = {};

export const getSession = (req, res, next) => {
  switch(req.body.user){
    case "user":
      try {
        JWT.verify(req.body.refresh_token, REFRESH_TOKEN_SECRET, (err, decoded) => {
          if (err || req.body.user !== 'user') throw err;

          JWT.verify(req.body.access_token, ACCESS_TOKEN_SECRET, (err) => {
            if (err) req.token = JWT.sign({ 'id': decoded.id, 'name': decoded.name, 'user': 'user' }, 
              ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn:"1m" });

            req.session = $_SESSION[decoded.id] || {};
          });
        });
      } catch(err) {
        req.err = err.message;
      }
    case "company":
      try {
        JWT.verify(req.body.refresh_token, COMPANY_REFRESH_TOKEN_SECRET, (err, decoded) => {
          if (err || req.body.user !== 'company') throw err;

          JWT.verify(req.body.access_token, COMPANY_ACCESS_TOKEN_SECRET, (err) => {
            if (err) req.token = JWT.sign({ 'id': decoded.id, 'name': decoded.name, 'user': 'company' }, 
              COMPANY_ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn:"1m" });

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

export const signin = async (req, res, next) => {
  const { type } = req.body;

  switch(type){
    case "company":  
      await signinCompany(req.body).then( data => {
        $_SESSION[data.id] = data;  

        req.refresh_token = JWT.sign({ 'id': data.id, 'name': data.name, 'email': data.email }, 
          COMPANY_REFRESH_TOKEN_SECRET, { algorithm: 'HS256', expiresIn:"14d" });

        req.access_token = JWT.sign({ 'id': data.id, 'name': data.name, 'user': 'company' }, 
          COMPANY_ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn:"1m" });

        req.user = { name: data.name, type: type }; //logo etc.
      }).catch(console.log);
      break;
    case "user": 
      await signinUser(req.body).then( data => {
        $_SESSION[data.id] = data;  

        req.refresh_token = JWT.sign({ 'id': data.id, 'name': data.name, 'email': data.email }, 
          REFRESH_TOKEN_SECRET, { algorithm: 'HS256', expiresIn:"14d" });

        req.access_token = JWT.sign({ 'id': data.id, 'name': data.name, 'user': 'user' }, 
          ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn:"1m" });

        req.user = { name: data.name, type: type }; //avatar etc.
      }).catch(console.log);
      break;
  }
  return next();
}