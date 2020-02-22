import nextConnect from 'next-connect';

const handler = nextConnect();
import { register } from '../database/controllers/auth';

handler.use((req, res, next) => {
  //validate
  return next();
}).post((req, res) => {
  register( req.body );
  // res.json({"test":"out"});
  // register();
});

export default handler;