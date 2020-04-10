import registerUser from './controllers/registerUser';
import registerCompany from './controllers/registerCompany';
import signinUser from './controllers/signinUser';
import signinCompany from './controllers/signinCompany';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

import { 
  ACCESS_TOKEN_SECRET,
  COMPANY_ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET, 
  COMPANY_REFRESH_TOKEN_SECRET } from '../../api/config';

const $_SESSION = {};

export const getSession = (req, res, next) => {
  const session = {
    "user": {
      rToken: REFRESH_TOKEN_SECRET,
      aToken: ACCESS_TOKEN_SECRET,
      user: 'user'
    },
    "company": {
      rToken: COMPANY_REFRESH_TOKEN_SECRET,
      aToken: COMPANY_ACCESS_TOKEN_SECRET,
      user: 'company'
    }
  };

  try {
    JWT.verify(req.body.refresh_token, session[req.body.user].rToken, (err, decoded) => {
      if (err || req.body.user !== session[req.body.user].user) throw err;

      JWT.verify(req.body.access_token, session[req.body.user].aToken, (err) => {
        if (err) 
          req.token = JWT.sign({ 'id': decoded.id, 'name': decoded.name, 'user': session[req.body.user].user }, 
                                  session[req.body.user].aToken, { algorithm: 'HS256', expiresIn:"1m" });
        req.session = $_SESSION[decoded.id] || {};
      });
    });
  } catch(err) {
      req.err = err.message;
  } finally{
      return next();
  }
}

export const register = async (req, res, next) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  switch(req.body.type){
    case "company":
      registerCompany(req.body); break;
    case "user": 
      registerUser(req.body); break;
  }

  return next();
}

export const signin = async (req, res, next) => {
  const { type } = req.body;

  const session = {
    "user": {
      rToken: REFRESH_TOKEN_SECRET,
      aToken: ACCESS_TOKEN_SECRET,
      signin: signinUser,
      user: 'user'
    },
    "company": {
      rToken: COMPANY_REFRESH_TOKEN_SECRET,
      aToken: COMPANY_ACCESS_TOKEN_SECRET,
      signin: signinCompany,
      user: 'company'
    }
  };

  await session[type].signin(req.body).then( data => {
    $_SESSION[data.id] = data;  

    req.refresh_token = JWT.sign({ 'id': data.id, 'name': data.name, 'email': data.email }, 
      session[type].rToken, { algorithm: 'HS256', expiresIn:"14d" });

    req.access_token = JWT.sign({ 'id': data.id, 'name': data.name, 'user': session[type].user }, 
      session[type].aToken, { algorithm: 'HS256', expiresIn:"1m" });

    req.user = { name: data.name, type: type }; //logo etc.
  }).catch(() => req.err = true);
  
  return next();
}