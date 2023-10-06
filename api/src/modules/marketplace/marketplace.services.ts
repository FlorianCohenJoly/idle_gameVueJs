import { Item } from "@/types/marketplace.types";
import {Items} from "@/db/models/Marketplace";
import { Resources } from "@/db/models/Ressource";
import * as console from "console";
import {EnhancedOmit, InferIdType, ObjectId} from "mongodb";
import {SimpleUser} from "@/types/auth.types";

export async function addItem(body : Item) {

    console.log(body);
    const updatedResourceQuantity = body.resource.quantity - body.quantity;
    const updatedItemResource = {...body.resource, quantity: updatedResourceQuantity};

    const  result = await Resources.updateOne(
        { id_user: new ObjectId(body.resource.id_user), _id: new ObjectId(body.resource._id) },
        { $set: { quantity: updatedResourceQuantity } }
    );

    console.log(result);

    await Items.insertOne({
            id_user : body.id_user,
            resource: updatedItemResource,
            quantity: body.quantity,
            price: body.price
    });

    return { success: true, message : body }
}

export async function getAllItems(userId: (EnhancedOmit<SimpleUser, "_id"> & { _id: InferIdType<SimpleUser> }) | null | undefined) {
    // @ts-ignore
    const items = await Items.find({ id_user: { $ne: userId }  }).toArray();
    if (!items) {
        return { success: false, message : "No items available."}
    }

    console.log("items" + items);
    return { success: true, message : "success", items }
}