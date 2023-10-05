"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketplaceRoutes = void 0;
const marketplace_services_1 = require("../../modules/marketplace/marketplace.services");
const marketplace_middleware_1 = require("../../modules/marketplace/marketplace.middleware");
async function marketplaceRoutes(app) {
    // Utilisez le middleware de validation avant d'appeler la fonction addItem
    app.post('/marketplace/item/add', marketplace_middleware_1.validateAddItem, async (req, res) => {
        const result = await (0, marketplace_services_1.addItem)(req.body);
        res.json(result);
    });
}
exports.marketplaceRoutes = marketplaceRoutes;
//# sourceMappingURL=marketplace.controller.js.map