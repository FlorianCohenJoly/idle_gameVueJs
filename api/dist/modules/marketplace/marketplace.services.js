"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItem = void 0;
const User_1 = require("../../db/models/User");
const Marketplace_1 = require("../../db/models/Marketplace");
async function addItem(body) {
    const userExist = await User_1.Users.findOne({ id: body.id_user });
    if (!userExist) {
        return { success: false, message: 'User ID does not exists' };
    }
    await Marketplace_1.Items.insertOne({
        id_user: body.id_user,
        id_user_ressource: body.id_user_ressource,
        quantity: body.quantity,
        isBought: body.isBought,
    });
    return { success: true };
}
exports.addItem = addItem;
//# sourceMappingURL=marketplace.services.js.map