import registerUser from './controllers/registerUser';
import registerCompany from './controllers/registerCompany';
import signinUser from './controllers/signinUser';
// import signinCompany from './controllers/signinCompany';
import JWT from 'jsonwebtoken';

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
        JWT.sign( 
          { name }, 
          "test", {algorithm: 'HS256'}, 
          (err, token) => {
            if(err) console.log(err);
            console.log(req.cookies);
            res.cookie(name, token, { httpOnly:true, path: '/api/signin' }).end("success!");
        });
      }).catch(console.log);
      break;
  }
  return next();
}