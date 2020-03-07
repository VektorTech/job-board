import nextConnect from 'next-connect';
import { get_vacancies } from "../database/middlewares/vacancy";

const handler = nextConnect();

handler.use((req, res, next) => {
  req.body = JSON.parse(req.body);
  //validate
  return next();
}).use(get_vacancies).post((req, res) => {
  res.json(req.data);
});

export default handler;