"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketplaceRoutes = void 0;
const marketplace_services_1 = require("../../modules/marketplace/marketplace.services");
const auth_middleware_1 = require("../../modules/auth/auth.middleware");
async function marketplaceRoutes(app) {
    app.post('/marketplace/item/add', auth_middleware_1.requireLogin, async (req, res) => {
        const result = await (0, marketplace_services_1.addItem)(req.body);
        res.json(result);
    });
    app.get('/marketplace/items', auth_middleware_1.requireLogin, async (req, res) => {
        const userId = req.body.userId;
        const result = await (0, marketplace_services_1.getAllItems)(userId);
        res.json(result);
    });
}
exports.marketplaceRoutes = marketplaceRoutes;
//# sourceMappingURL=marketplace.controller.js.map