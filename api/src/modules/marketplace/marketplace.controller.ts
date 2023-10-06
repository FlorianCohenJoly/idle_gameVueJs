import { Express } from 'express';
import {addItem, getAllItems} from '@/modules/marketplace/marketplace.services';

export async function marketplaceRoutes(app: Express) {

    app.post('/marketplace/item/add', async (req, res) => {
        const result = await addItem(req.body);
        res.json(result);
    });

    app.get('/:userId/marketplace/items', async (req, res) => {
        const user = req.user;
        console.log(user);
        const result = await getAllItems(user);
        res.json(result);
    });
}
