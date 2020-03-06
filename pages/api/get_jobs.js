import nextConnect from 'next-connect';
import { get_vacancy } from "../database/middlewares/vacancy";

const handler = nextConnect();

handler.use((req, res, next) => {
  req.body = JSON.parse(req.body);
  //validate
  return next();
}).use(get_vacancy).post((req, res) => {
  res.json();
});

export default handler;