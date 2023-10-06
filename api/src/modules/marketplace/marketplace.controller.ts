import { Express } from 'express';
import {addItem, getAllItems} from '@/modules/marketplace/marketplace.services';
import {requireLogin} from "@/modules/auth/auth.middleware";

export async function marketplaceRoutes(app: Express) {

    app.post('/marketplace/item/add', requireLogin, async (req, res) => {
        const result = await addItem(req.body);
        res.json(result);
    });

    app.get('/marketplace/items', requireLogin, async (req, res) => {
        const userId = req.body.userId;
        const result = await getAllItems(userId);
        res.json(result);
    });
}
