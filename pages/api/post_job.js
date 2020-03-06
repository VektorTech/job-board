import nextConnect from 'next-connect';
import { add_vacancy } from "../database/middlewares/vacancy";

const handler = nextConnect();

handler.use((req, res, next) => {
  req.body = JSON.parse(req.body);
  //validate
  return next();
}).use(add_vacancy).post((req, res) => {
  res.send("OK");
});

export default handler;