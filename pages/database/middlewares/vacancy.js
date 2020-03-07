import JWT from 'jsonwebtoken';
import { COMPANY_ACCESS_TOKEN_SECRET } from '../../api/config';
import addVacancy from "./controllers/addVacancy";
import getVacancies from "./controllers/getVacancies";

export const add_vacancy = (req, res, next) => {
    const access_token = req.headers.cookie.match(/access-token=(.*)[;$]?/)[1];

    JWT.verify(access_token, COMPANY_ACCESS_TOKEN_SECRET, async (err, decoded) => {
        if(!err)
            await addVacancy({ ...req.body, id: Date.now(), companyId: decoded.id });
            return next();
    });
}

export const get_vacancies = async (req, res, next) => {
    await getVacancies(req.body).then( data => req.data = data );
    return next();
}