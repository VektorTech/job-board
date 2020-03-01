export default async ctx => {
    const cookies = {};
    try {
        ctx.req.headers.cookie.replace(/\s+/, '').split(';').forEach(element => {
            let temp = element.split("=");
            cookies[temp[0]] = temp[1];
        });

        JWT.verify(cookies['access-token'], ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) throw err;
            console.log(decoded);  
        }); 
    } catch(err) {
        const data = await fetch('http://localhost:3000/api/token', {
            method:"POST",
            body: JSON.stringify({ token: cookies['refresh-token'] })
        }).then(res => res.json());

        if(data['err']){
            ctx.res.write('err');
            ctx.res.end();
        } else {
            ctx.res.setHeader('Set-Cookie', `access-token=${data['access-token']}; Path=/`);
        }
    } finally {
        return {};
    }
};