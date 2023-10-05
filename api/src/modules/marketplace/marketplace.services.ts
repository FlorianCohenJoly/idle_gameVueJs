import {ItemBody} from "@/types/marketplace.types";
import {Users} from "@/db/models/User";
import {Items} from "@/db/models/Marketplace";

export async function addItem(body: ItemBody) {

    const userExist = await Users.findOne({ id: body.id_user });
    if (!userExist) {
        return { success: false, message: 'User ID does not exists' }
    }

    await Items.insertOne({
        id_user: body.id_user,
        id_user_ressource: body.id_user_ressource,
        quantity: body.quantity,
        isBought: body.isBought,
    });

    return { success: true }
}
