"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllResources = void 0;
const Ressource_1 = require("../../../db/models/Ressource");
async function getAllResources(name) {
    const resourceNames = await Ressource_1.Ressources.find({ name: { $ne: name } }).toArray();
    if (!resourceNames) {
        return { success: false, message: "No resources available." };
    }
    console.log("Noms des ressources récupérés :", resourceNames);
    return { success: true, message: "success", resourceNames };
}
exports.getAllResources = getAllResources;
//# sourceMappingURL=ressources.services.js.map