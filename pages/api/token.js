import nextConnect from 'next-connect';
import { token } from '../database/middlewares/auth';

const handler = nextConnect();

handler.use((req, res, next) => {
  //validate
    req.body = JSON.parse(req.body);
    return next();
}).use(token).post((req, res) => {
    if(req.err) res.json({ 'err': req.err });
    else
      res.json({'access-token': req.token});
});

export default handler;