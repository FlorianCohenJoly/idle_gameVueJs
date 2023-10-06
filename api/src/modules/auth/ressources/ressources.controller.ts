import { Express } from 'express'
//import { requireRessources } from './ressources.middleware'
import { getAllResources } from './ressources.services'
import { requireLogin } from '../auth.middleware';

export function inventoryRoutes(app: Express) {
    
    app.get('/inventory', requireLogin, async (req, res) => {
        const name = req.body.name;
        const resources = await getAllResources(name);
        res.json(resources);

    })

}

