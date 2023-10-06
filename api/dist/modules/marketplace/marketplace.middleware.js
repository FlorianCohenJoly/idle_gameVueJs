"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAddItem = void 0;
// Middleware de validation pour l'ajout d'un élément
function validateAddItem(req, res, next) {
    const { id_user, id_user_ressource, quantity, isBought } = req.body;
    if (id_user !== undefined &&
        id_user_ressource !== undefined &&
        typeof quantity === 'number' &&
        typeof isBought === 'boolean') {
        next();
    }
    else {
        res.status(400).json({ success: false, message: 'Données d\'entrée invalides' });
    }
}
exports.validateAddItem = validateAddItem;
//# sourceMappingURL=marketplace.middleware.js.map