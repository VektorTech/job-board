import JWT from 'jsonwebtoken';
import { COMPANY_ACCESS_TOKEN_SECRET } from '../../api/config';

export const add_vacancy = (req, res, next) => {
    const access_token = req.headers.cookie.match(/access-token=(.*)[;$]/)[1];

    JWT.verify(access_token, COMPANY_ACCESS_TOKEN_SECRET, (err, decode) => {
        console.log(decode);
    });
}