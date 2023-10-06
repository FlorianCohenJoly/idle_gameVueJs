"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const auth_middleware_1 = require("../auth/auth.middleware");
const user_services_1 = require("../../modules/User/user.services");
function userRoutes(app) {
    app.get('/user/ressources', auth_middleware_1.requireLogin, async (_, res) => {
        try {
            const userRessources = await (0, user_services_1.getAllUserResources)();
            res.json(userRessources);
        }
        catch (error) {
            console.error('Erreur lors de la récupération des ressources :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    });
}
exports.userRoutes = userRoutes;
//# sourceMappingURL=user.controller.js.map