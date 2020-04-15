import nextConnect from 'next-connect';
import { getSession } from '../database/middlewares/auth';

const handler = nextConnect();

handler.use((req, res, next) => {
  req.body = JSON.parse(req.body);
  //validate
  return next();
}).use(getSession).post((req, res) => {
  if (req.session && req.token) { req.session['access-token'] = req.token; }
  !req.err ? res.json(req.session) : res.json(req.err);
});

export default handler;