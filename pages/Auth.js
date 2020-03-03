import fetch from 'isomorphic-unfetch';

export default async (ctx, access) => {
    const cookies = {};
    let data = {};

    ctx.req.headers.cookie.replace(/\s+/, '').split(';').forEach(element => {
        let temp = element.split("=");
        cookies[temp[0]] = temp[1];
    });

    if(cookies['refresh-token']){
        data = await fetch('http://localhost:3000/api/session', {
            method:"POST",
            body: JSON.stringify({ 
                access_token: cookies['access-token'], 
                refresh_token: cookies['refresh-token'], 
                user: access 
            }) }).then(res => res.json());
    }

    if(JSON.stringify(data) == "{}" || data['err']){
        ctx.res.writeHead(302, { 'Location': '/?signin=true' });
        ctx.res.end();
    } else if(data['access-token']) {
        console.log(data['access-token'])
        ctx.res.setHeader('Set-Cookie', `access-token=${data['access-token']}; Path=/`);
    }

    return data;
};