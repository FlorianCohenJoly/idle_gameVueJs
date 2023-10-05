import { Express } from 'express'
//import { requireRessources } from './ressources.middleware'
import { getAllResources } from './ressources.services'
import { requireLogin } from '../auth/auth.middleware';

export function inventoryRoutes(app: Express) {
    
    app.get('/inventory', requireLogin, async (_, res) => {
    try {
        const resources = await getAllResources();

        res.json(resources);
    } catch (error) {
        console.error('Erreur lors de la récupération des ressources :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

}
