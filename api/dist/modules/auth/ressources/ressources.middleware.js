"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRessources = void 0;
function requireRessources(req, res, next) {
    if (!req.ressource) {
        console.log('Requête non autorisée');
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    next();
}
exports.requireRessources = requireRessources;
//# sourceMappingURL=ressources.middleware.js.map