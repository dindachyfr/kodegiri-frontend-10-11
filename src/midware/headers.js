const protect = (req, res, next) => {
    if (req.headers['user-id'] === 'ifabula' && req.headers.scope === 'user') {
        next()
        } else{
            const errorRes = new Error("UNAUTHORIZED!");
            errorRes.status = 401;
            next(errorRes);
        }
    }
module.exports = {
    protect
}