import { Express } from 'express';
import { addItem } from '@/modules/marketplace/marketplace.services';
import {validateAddItem} from "@/modules/marketplace/marketplace.middleware";

export async function marketplaceRoutes(app: Express) {
    // Utilisez le middleware de validation avant d'appeler la fonction addItem
    app.post('/marketplace/item/add', validateAddItem, async (req, res) => {
        const result = await addItem(req.body);
        res.json(result);
    });
}
