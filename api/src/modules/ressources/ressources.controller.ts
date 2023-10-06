import { Express } from 'express'
import { getAllResourcesForAUser } from './ressources.services'
import { requireLogin } from '../auth/auth.middleware';

export function inventoryRoutes(app: Express) {

    app.get('/resources', requireLogin, async (req, res) => {
        const userId = req.user!._id;
        const resources = await getAllResourcesForAUser(userId);
        res.json(resources);

    });
}
