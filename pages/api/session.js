import nextConnect from 'next-connect';
import { getSession } from '../database/middlewares/auth';

const handler = nextConnect();

handler.use((req, res, next) => {
  req.body = JSON.parse(req.body);
  //validate
  return next();
}).use(getSession).post((req, res) => {
    res.json(req.session);
});

export default handler;