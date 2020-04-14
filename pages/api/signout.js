import nextConnect from 'next-connect';
import { signout } from '../database/middlewares/auth';

const handler = nextConnect();

handler.use((req, res, next) => {
    req.body = JSON.parse(req.body);
    return next();
}).use(signout).post((req, res) => {
    res.end();
});

export default handler;