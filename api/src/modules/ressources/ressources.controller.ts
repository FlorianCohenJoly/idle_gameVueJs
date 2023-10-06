import {Express} from 'express'
import {getAllRessources} from './ressources.services'
import {ObjectId} from "mongodb";

export function inventoryRoutes(app: Express) {

    app.get('/:userId/resources', async (_req, res) => {
        const userId = new ObjectId(_req.params.userId)
        // const resources = await getAllResources ForAUser(user);
        const resources = await getAllRessources(userId)
        res.json(resources);
    });

}
