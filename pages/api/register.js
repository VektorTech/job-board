import nextConnect from 'next-connect';

const handler = nextConnect();
import { register } from '../database/middlewares/auth';

handler.use((req, res, next) => {
  req.body = JSON.parse(req.body);
  req.body['id'] = Date.now();
    //validate
  return next();
}).use(register).post((req, res) => {
  res.send("Success!")
  // res.json({"test":"out"});
});

export default handler;