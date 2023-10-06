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
exports.buyAnItem = exports.getAllItems = exports.addItem = void 0;
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
async function getAllItems(user) {
    // @ts-ignore
    const items = await Marketplace_1.Items.find({ id_user: { $ne: user } }).toArray();
    if (!items) {
        return { success: false, message: "No items available." };
    }
    console.log("items" + items);
    return { success: true, message: "success", items };
}
exports.getAllItems = getAllItems;
async function buyAnItem(itemId, userId) {
    try {
        const item = await Marketplace_1.Items.findOne({ _id: itemId });
        if (!item) {
            return { success: false, message: "Item not found." };
        }
        const userResource = await Ressource_1.Resources.findOne({
            id_user: userId,
            name: item.resource.name,
        });
        if (!userResource || userResource.quantity < item.quantity) {
            return { success: false, message: "Insufficient resources." };
        }
        const updatedUserResourceQuantity = userResource.quantity - item.quantity;
        if (userResource) {
            await Ressource_1.Resources.updateOne({
                id_user: userId,
                name: item.resource.name,
            }, { $set: { quantity: updatedUserResourceQuantity } });
        }
        else {
            await Ressource_1.Resources.insertOne({
                _id: userId,
                id_user: userId,
                name: item.resource.name,
                quantity: item.quantity,
            });
        }
        if (item.quantity === 0) {
            await Marketplace_1.Items.deleteOne({ _id: itemId });
        }
        else {
            await Marketplace_1.Items.updateOne({ _id: itemId }, { $set: { quantity: item.quantity - 1 } });
        }
        return { success: true, message: "Item purchased successfully" };
    }
    catch (error) {
        console.error("Error buying item: ", error);
        return { success: false, message: "An error occurred while buying the item." };
    }
}
exports.buyAnItem = buyAnItem;
//# sourceMappingURL=marketplace.services.js.map