"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllResources = void 0;
const Ressource_1 = require("../../db/models/Ressource");
function getAllResources() {
    return Ressource_1.Ressources.find({}).toArray();
}
exports.getAllResources = getAllResources;
//# sourceMappingURL=ressources.services.js.map