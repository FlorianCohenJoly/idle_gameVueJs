"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryRoutes = void 0;
const ressources_services_1 = require("./ressources.services");
const auth_middleware_1 = require("../auth/auth.middleware");
function inventoryRoutes(app) {
    app.get('/resources', auth_middleware_1.requireLogin, async (req, res) => {
        const userId = req.user._id;
        const resources = await (0, ressources_services_1.getAllResourcesForAUser)(userId);
        res.json(resources);
    });
}
exports.inventoryRoutes = inventoryRoutes;
//# sourceMappingURL=ressources.controller.js.map