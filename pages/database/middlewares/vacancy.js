import JWT from 'jsonwebtoken';
import { COMPANY_ACCESS_TOKEN_SECRET } from '../../api/config';
import addVacancy from "./controllers/addVacancy";

export const add_vacancy = (req, res, next) => {
    const access_token = req.headers.cookie.match(/access-token=(.*)[;$]?/)[1];

    JWT.verify(access_token, COMPANY_ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(!err)
            addVacancy({ ...req.body, id: Date.now(), company: decoded.id });
    });
    next();
}