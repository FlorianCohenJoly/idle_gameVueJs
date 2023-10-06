import {Express} from "express";
import {buyPlanets, getPlanets, continuouslyUpdateUserBalance, upgradePlanet} from "@/modules/planet/planet.services";
import {ObjectId} from "mongodb";


export function planetsRoutes(app: Express) {

    app.get('/planets', async (_req, res) => {
        const planets = await getPlanets();
        res.json(planets);
    });

    app.put('/buy-planet/:id', async (_req, res) => {
        const planetId: ObjectId = new ObjectId(_req.params.id);
        const userId: ObjectId = new ObjectId(_req.body.userId)
        try {
            const result = await buyPlanets(planetId, userId);
            if (result.success) {
                res.status(200).json({message: result.message});
            } else {
                res.status(404).json({message: result.message});
            }
        } catch (error) {
            res.status(500).json({message: "Internal Server Error", error});
        }
    })

    app.put('/planet/gain', async (_req, res) => {
        const userId: ObjectId = new ObjectId(_req.body.userId)
        try {
            const result = await continuouslyUpdateUserBalance(userId);
            if (result.success) {
                res.status(200).json({data: result});
            } else {
                res.status(404).json(result);
            }
        } catch (error) {
            res.status(500).json({message: "Internal Server Error", error});
        }
    })

    app.put('/planet/:id/upgrade', async (_req, res) => {
        const userId: ObjectId = new ObjectId(_req.body.userId)
        const planeteId: ObjectId = new ObjectId(_req.params.id)
        console.log(userId)
        try {
            const result = await upgradePlanet(planeteId, userId)
            if (result.success) {
                res.status(200).json({data: result});
            } else {
                res.status(404).json(result);
            }
        } catch (error) {
            res.status(500).json({message: "Internal Server Error", error});
        }
    })
}