"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireLogin = exports.isLogin = void 0;
const auth_services_1 = require("./auth.services");
async function isLogin(req, _res, next) {
    const bearer = req.headers['authorization']; // Bearer TOKEN
    if (bearer) {
        /*     _ = Bearer
           token = TOKEN */
        const [_, token] = bearer.split(' ');
        const user = await (0, auth_services_1.findByToken)(token);
        req.user = user;
        next();
        return;
    }
    else if (req.cookies) {
        console.log(req.cookies);
        const token = req.cookies['token'];
        if (token) {
            const user = await (0, auth_services_1.findByToken)(token);
            req.user = user;
            next();
            return;
        }
    }
    next();
}
exports.isLogin = isLogin;
async function requireLogin(req, res, next) {
    if (!req.user) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    next();
}
exports.requireLogin = requireLogin;
//# sourceMappingURL=auth.middleware.js.map