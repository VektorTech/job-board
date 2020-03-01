export default (req, res, next) => {
    res.cookie = function( name, value, options = { expiration:null, httpOnly:false, path:'' } ){
        const { expiration, httpOnly, path } = options;
        res.setHeader("Set-Cookie",
        `${name}=${value}; ${expiration ? 'Expires='+expiration+';' : ''} ${httpOnly ? 'HttpOnly;' : ''} ${path ? 'Path='+path : ''}`
        );
        return res;
    }
    return next();
}