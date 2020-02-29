import session from 'next-session';
import nextConnect from 'next-connect';
import { signin } from '../database/middlewares/auth';
import cookieDef from '../database/middlewares/cookieDef';

const handler = nextConnect();

// handler.use(session({ ...yourOptions }));

handler.use(cookieDef).use((req, res, next) => {
  req.body = JSON.parse(req.body);
  //validate
  return next();
}).use(signin).post((req, res) => {
  
});

export default handler;