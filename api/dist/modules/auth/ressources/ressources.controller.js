"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryRoutes = void 0;
//import { requireRessources } from './ressources.middleware'
const ressources_services_1 = require("./ressources.services");
const auth_middleware_1 = require("../auth.middleware");
function inventoryRoutes(app) {
    app.get('/inventory', auth_middleware_1.requireLogin, async (req, res) => {
        const name = req.body.name;
        const resources = await (0, ressources_services_1.getAllResources)(name);
        res.json(resources);
    });
}
exports.inventoryRoutes = inventoryRoutes;
//# sourceMappingURL=ressources.controller.js.map