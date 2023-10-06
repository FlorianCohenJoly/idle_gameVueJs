"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryRoutes = void 0;
const ressources_services_1 = require("./ressources.services");
const mongodb_1 = require("mongodb");
function inventoryRoutes(app) {
    app.get('/:userId/resources', async (_req, res) => {
        const userId = new mongodb_1.ObjectId(_req.params.userId);
        // const resources = await getAllResources ForAUser(user);
        const resources = await (0, ressources_services_1.getAllRessources)(userId);
        res.json(resources);
    });
}
exports.inventoryRoutes = inventoryRoutes;
//# sourceMappingURL=ressources.controller.js.map