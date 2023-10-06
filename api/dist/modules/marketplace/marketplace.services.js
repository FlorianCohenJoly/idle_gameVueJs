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
exports.getAllItems = exports.addItem = void 0;
const Marketplace_1 = require("../../db/models/Marketplace");
const Ressource_1 = require("../../db/models/Ressource");
const console = __importStar(require("console"));
async function addItem(body) {
    const updatedRessourceQuantity = body.ressource.quantity - body.quantity;
    const updatedItemRessource = Object.assign(Object.assign({}, body.ressource), { quantity: updatedRessourceQuantity });
    await Ressource_1.Ressources.updateOne({ userId: body.ressource.id_user, name: body.ressource.name }, { $set: { quantity: updatedRessourceQuantity } });
    await Marketplace_1.Items.insertOne({
        id_user: body.id_user,
        ressource: updatedItemRessource,
        quantity: body.quantity,
        price: body.price
    });
    return { success: true, message: body };
}
exports.addItem = addItem;
async function getAllItems(userId) {
    const items = await Marketplace_1.Items.find({ id_user: { $ne: userId } }).toArray();
    if (!items) {
        return { success: false, message: "No items available." };
    }
    console.log("items" + items);
    return { success: true, message: "success", items };
}
exports.getAllItems = getAllItems;
//# sourceMappingURL=marketplace.services.js.map