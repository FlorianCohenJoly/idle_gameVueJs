import { Item } from "@/types/marketplace.types";
import {Items} from "@/db/models/Marketplace";
import { Ressources } from "@/db/models/Ressource";
import * as console from "console";

export async function addItem(body : Item) {

    const updatedRessourceQuantity = body.ressource.quantity - body.quantity;
    const updatedItemRessource = {...body.ressource, quantity: updatedRessourceQuantity};

    await Ressources.updateOne(
        { userId: body.ressource.id_user, name: body.ressource.name },
        { $set: { quantity: updatedRessourceQuantity } }
    );

    await Items.insertOne({
            id_user : body.id_user,
            ressource: updatedItemRessource,
            quantity: body.quantity,
            price: body.price
    });

    return { success: true, message : body }
}

export async function getAllItems(userId : string) {
    const items = await Items.find({ id_user: { $ne: userId }  }).toArray();
    if (!items) {
        return { success: false, message : "No items available."}
    }

    console.log("items" + items);
    return { success: true, message : "success", items }
}