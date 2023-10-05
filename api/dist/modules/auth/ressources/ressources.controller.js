"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryRoutes = void 0;
//import { requireRessources } from './ressources.middleware'
const ressources_services_1 = require("./ressources.services");
const auth_middleware_1 = require("../auth.middleware");
function inventoryRoutes(app) {
    app.get('/inventory', auth_middleware_1.requireLogin, async (_, res) => {
        try {
            const resources = await (0, ressources_services_1.getAllResources)();
            res.json(resources);
        }
        catch (error) {
            console.error('Erreur lors de la récupération des ressources :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    });
}
exports.inventoryRoutes = inventoryRoutes;
//# sourceMappingURL=ressources.controller.js.map