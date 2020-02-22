import nextConnect from 'next-connect';

const handler = nextConnect();
// import { register } from '../controllers/auth';

handler.use((req, res, next) => {
  //validate
  return next();
}).post((req, res) => {
  const data = {"help":"em"};
  console.log(req);
  res.json(data);
  // register();
});

export default handler;