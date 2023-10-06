"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planetsRoutes = void 0;
const planet_services_1 = require("../../modules/planet/planet.services");
const mongodb_1 = require("mongodb");
function planetsRoutes(app) {
    app.get('/planets', async (_req, res) => {
        const planets = await (0, planet_services_1.getPlanets)();
        res.json(planets);
    });
    app.put('/buy-planet/:id', async (_req, res) => {
        const planetId = new mongodb_1.ObjectId(_req.params.id);
        const userId = new mongodb_1.ObjectId(_req.body.userId);
        try {
            const result = await (0, planet_services_1.buyPlanets)(planetId, userId);
            if (result.success) {
                res.status(200).json({ message: result.message });
            }
            else {
                res.status(404).json({ message: result.message });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error", error });
        }
    });
    app.put('/planet/gain', async (_req, res) => {
        const userId = new mongodb_1.ObjectId(_req.body.userId);
        try {
            const result = await (0, planet_services_1.continuouslyUpdateUserBalance)(userId);
            if (result.success) {
                res.status(200).json({ data: result });
            }
            else {
                res.status(404).json(result);
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error", error });
        }
    });
    app.put('/planet/:id/upgrade', async (_req, res) => {
        const userId = new mongodb_1.ObjectId(_req.body.userId);
        const planeteId = new mongodb_1.ObjectId(_req.params.id);
        console.log(userId);
        try {
            const result = await (0, planet_services_1.upgradePlanet)(planeteId, userId);
            if (result.success) {
                res.status(200).json({ data: result });
            }
            else {
                res.status(404).json(result);
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error", error });
        }
    });
}
exports.planetsRoutes = planetsRoutes;
//# sourceMappingURL=planet.controller.js.map