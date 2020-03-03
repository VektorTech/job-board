import JWT from 'jsonwebtoken';
import fetch from 'isomorphic-unfetch';

import { ACCESS_TOKEN_SECRET } from './api/config';

export default async (ctx, access) => {
    const cookies = {};
    try {
        ctx.req.headers.cookie.replace(/\s+/, '').split(';').forEach(element => {
            let temp = element.split("=");
            cookies[temp[0]] = temp[1];
        });

        JWT.verify(cookies['access-token'], ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err || decoded.user != access) throw err;
        }); 
    } catch(err) {
        const data = await fetch('http://localhost:3000/api/token', {
            method:"POST",
            body: JSON.stringify({ token: cookies['refresh-token'], user: access })
        }).then(res => res.json());

        if(data['err']){
            delete cookies['access-token'];
            ctx.res.writeHead(302, { 'Location': '/?signin=true' });
            ctx.res.end();
        } else {
            cookies['access-token'] = data['access-token'];
            ctx.res.setHeader('Set-Cookie', `access-token=${data['access-token']}; Path=/`);
        }
    } finally {
        if(cookies['access-token']){
            const data = await fetch('http://localhost:3000/api/session', {
                method:"POST",
                body: JSON.stringify({ token: cookies['access-token'], user: access })
            }).then(res => res.json());

            return data;
        }
        return {};
    }
};