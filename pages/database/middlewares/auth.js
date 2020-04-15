import registerUser from './controllers/registerUser';
import registerCompany from './controllers/registerCompany';
import signinUser from './controllers/signinUser';
import signinCompany from './controllers/signinCompany';

import memcached from '../memcached';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

import { 
  ACCESS_TOKEN_SECRET,
  COMPANY_ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET, 
  COMPANY_REFRESH_TOKEN_SECRET } from '../../api/config';

const $_SESSION = {
  add: (data) =>  memcached.add(data.id, JSON.stringify(data), 60*60, err => { /* stuff */ }),
  get: (id) => new Promise((resolve, reject) => memcached.gets(id, (err, data) => { if (err || !data) { reject(err); } else resolve(data[id]); })),
  del: (data) => memcached.del(data.id, err => { /* stuff */ })
};

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

  JWT.verify(req.body.refresh_token, session[req.body.user].rToken, (err, decoded) => {
    if (err || req.body.user !== session[req.body.user].user) throw err;

    JWT.verify(req.body.access_token, session[req.body.user].aToken, (err) => {
      if (err) 
        req.token = JWT.sign({ 'id': decoded.id, 'name': decoded.name, 'user': session[req.body.user].user }, 
                                session[req.body.user].aToken, { algorithm: 'HS256', expiresIn:"1m" });

      $_SESSION.get(decoded.id).then(data => {
        req.session = JSON.parse(data);
      }).catch(err => { 
        req.err = {err:true};
      }).finally(() => next());

    });
  });
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

export const signout = (req, res, next) => {
  const session = {
    "user": {
      rToken: REFRESH_TOKEN_SECRET,
      aToken: ACCESS_TOKEN_SECRET,
    },
    "company": {
      rToken: COMPANY_REFRESH_TOKEN_SECRET,
      aToken: COMPANY_ACCESS_TOKEN_SECRET,
    }
  };

  const access_token = req.body.access_token.split('access-token=')[1];
  const data = JSON.parse(req.body.data);

  JWT.verify(access_token, session[data.type].aToken, (err, decoded) => {
    if (err) return next();
    $_SESSION.del(decoded.id);
    next();
  });
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
    $_SESSION.add(data);  

    req.refresh_token = JWT.sign({ 'id': data.id, 'name': data.name, 'email': data.email }, 
      session[type].rToken, { algorithm: 'HS256', expiresIn:"14d" });

    req.access_token = JWT.sign({ 'id': data.id, 'name': data.name, 'user': session[type].user }, 
      session[type].aToken, { algorithm: 'HS256', expiresIn:"3d" });

    req.user = { name: data.name, type: type }; //add logo etc.
  }).catch(() => req.err = true);
  
  return next();
}