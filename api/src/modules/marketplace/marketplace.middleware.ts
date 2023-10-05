import { Request, Response, NextFunction } from 'express';
import { ItemBody } from '@/types/marketplace.types';

// Middleware de validation pour l'ajout d'un élément
export function validateAddItem(req: Request, res: Response, next: NextFunction) {
    const { id_user, id_user_ressource, quantity, isBought } = req.body as ItemBody;

    if (
        id_user !== undefined &&
        id_user_ressource !== undefined &&
        typeof quantity === 'number' &&
        typeof isBought === 'boolean'
    ) {
        next();
    } else {
        res.status(400).json({ success: false, message: 'Données d\'entrée invalides' });
    }
}
