import fetch from 'isomorphic-unfetch';

export default async (ctx, access) => {
    const cookies = {};

    ctx.req.headers.cookie.replace(/\s+/, '').split(';').forEach(element => {
        let temp = element.split("=");
        cookies[temp[0]] = temp[1];
    });

    return await fetch('http://localhost:3000/api/session', {
        method:"POST",
        body: JSON.stringify({ 
            access_token: cookies['access-token'], 
            refresh_token: cookies['refresh-token'], 
            user: access 
    }) }).then(res => res.json()).then(res => {
        if(JSON.stringify(res) == "{}" || res['err']){
            ctx.res.writeHead(302, { 'Location': '/?signin=true' });
            ctx.res.end();
        } else if(res['access-token']) {
            ctx.res.setHeader('Set-Cookie', `access-token=${res['access-token']}; Path=/`);
        }
        return res;
    });
};