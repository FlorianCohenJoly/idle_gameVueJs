"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAuthRoutes = void 0;
const auth_services_1 = require("./auth.services");
const auth_middleware_1 = require("./auth.middleware");
function registerAuthRoutes(app) {
    // on enregistre une route /auth/register
    // TypeParams, TypeQuery, TypeBody
    app.post('/auth/register', async (req, res) => {
        // on call le service auth.register
        const result = await (0, auth_services_1.register)(req.body);
        // on set un cookie si on a un token dans le result
        if (result.token) {
            res.cookie('token', result.token, { expires: new Date(+new Date() + 1000000000), sameSite: 'none' });
        }
        // on reponds a la requete http avec le result
        res.json(result);
    });
    app.post('/auth/login', async (req, res) => {
        const result = await (0, auth_services_1.login)(req.body);
        // on set un cookie si on a un token dans le result
        if (result.token) {
            res.cookie('token', result.token, { expires: new Date(+new Date() + 1000000000), sameSite: 'none' });
        }
        res.json(result);
    });
    app.get('/auth/me', auth_middleware_1.requireLogin, (req, res) => {
        res.json(req.user);
    });
}
exports.registerAuthRoutes = registerAuthRoutes;
//# sourceMappingURL=auth.controller.js.map