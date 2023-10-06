"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketplaceRoutes = void 0;
const marketplace_services_1 = require("../../modules/marketplace/marketplace.services");
async function marketplaceRoutes(app) {
    app.post('/marketplace/item/add', async (req, res) => {
        const result = await (0, marketplace_services_1.addItem)(req.body);
        res.json(result);
    });
    app.get('/:userId/marketplace/items', async (req, res) => {
        const user = req.user;
        console.log(user);
        const result = await (0, marketplace_services_1.getAllItems)(user);
        res.json(result);
    });
}
exports.marketplaceRoutes = marketplaceRoutes;
//# sourceMappingURL=marketplace.controller.js.map