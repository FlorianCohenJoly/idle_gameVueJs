"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRessources = exports.getAllResourcesForAUser = void 0;
const Ressource_1 = require("../../db/models/Ressource");
const console = __importStar(require("console"));
const User_1 = require("../../db/models/User");
async function getAllResourcesForAUser(user) {
    // @ts-ignore
    const resources = await Ressource_1.Resources.find({ id_user: user }).toArray();
    if (resources.length === 0) {
        return { success: false, message: "No resources available." };
    }
    console.log("ressources récupérées :", resources);
    return { success: true, message: "success", resources };
}
exports.getAllResourcesForAUser = getAllResourcesForAUser;
async function getAllRessources(userId) {
    const user = await User_1.Users.findOne({ _id: userId });
    if (!user) {
        return { success: false, message: "Utilisateur n'existe pas" };
    }
    const ressources = await Ressource_1.Resources.find({ id_user: userId }).toArray();
    if (ressources.length === 0) {
        console.log(ressources);
        return { success: false, message: "No resources available." };
    }
    return { success: true, message: "succes", ressources: ressources };
}
exports.getAllRessources = getAllRessources;
//# sourceMappingURL=ressources.services.js.map