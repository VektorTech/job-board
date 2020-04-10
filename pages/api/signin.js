import nextConnect from 'next-connect';
import { signin } from '../database/middlewares/auth';
import cookieDef from '../database/middlewares/cookieDef';

const handler = nextConnect();

handler.use(cookieDef).use((req, res, next) => {
  req.body = JSON.parse(req.body);
  //validate
  return next();
}).use(signin).post((req, res) => {
  if(req.err){
    console.log("Err");
    res.json({ err:'Login Error' });
  } else {
    const future = new Date(new Date().getTime() + (1000*60*60*24*30*3));
    res.cookie('refresh-token', req.refresh_token, { httpOnly:true, path: '/', expiration: future });
    res.json({ token: req.access_token, session_data: req.user });
  }
});

export default handler;