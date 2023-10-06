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
const mongodb_1 = require("mongodb");
async function addItem(body) {
    console.log(body);
    const updatedResourceQuantity = body.resource.quantity - body.quantity;
    const updatedItemResource = Object.assign(Object.assign({}, body.resource), { quantity: updatedResourceQuantity });
    const result = await Ressource_1.Resources.updateOne({ id_user: new mongodb_1.ObjectId(body.resource.id_user), _id: new mongodb_1.ObjectId(body.resource._id) }, { $set: { quantity: updatedResourceQuantity } });
    console.log(result);
    await Marketplace_1.Items.insertOne({
        id_user: body.id_user,
        resource: updatedItemResource,
        quantity: body.quantity,
        price: body.price
    });
    return { success: true, message: body };
}
exports.addItem = addItem;
async function getAllItems(userId) {
    // @ts-ignore
    const items = await Marketplace_1.Items.find({ id_user: { $ne: userId } }).toArray();
    if (!items) {
        return { success: false, message: "No items available." };
    }
    console.log("items" + items);
    return { success: true, message: "success", items };
}
exports.getAllItems = getAllItems;
//# sourceMappingURL=marketplace.services.js.map