import nextConnect from 'next-connect';

const handler = nextConnect();
import { register } from '../middlewares/auth';

handler.use((req, res, next) => {
  req.body = JSON.parse(req.body);
  //validate
  return next();
}).use(register).post((req, res) => {
  res.send("Success!")
  // res.json({"test":"out"});
});

export default handler;