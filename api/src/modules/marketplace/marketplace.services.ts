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

export async function getAllItems(user: (EnhancedOmit<SimpleUser, "_id"> & { _id: InferIdType<SimpleUser> }) | null | undefined) {
    // @ts-ignore
    const items = await Items.find({ id_user: { $ne: user }  }).toArray();
    if (!items) {
        return { success: false, message : "No items available."}
    }

    console.log("items" + items);
    return { success: true, message : "success", items }
}

export async function buyAnItem(itemId: ObjectId, userId: ObjectId) {
    try {
        const item = await Items.findOne({ _id: itemId });

        if (!item) {
            return { success: false, message: "Item not found." };
        }

        const userResource = await Resources.findOne({
            id_user: userId,
            name: item.resource.name,
        });

        if (!userResource || userResource.quantity < item.quantity) {
            return { success: false, message: "Insufficient resources." };
        }

        const updatedUserResourceQuantity =
            userResource.quantity - item.quantity;

        if (userResource) {
            await Resources.updateOne(
                {
                    id_user: userId,
                    name: item.resource.name,
                },
                { $set: { quantity: updatedUserResourceQuantity } }
            );
        } else {
            await Resources.insertOne({
                _id: userId,
                id_user: userId,
                name: item.resource.name,
                quantity: item.quantity,
            });
        }

        if (item.quantity === 0) {
            await Items.deleteOne({ _id: itemId });
        } else {
            await Items.updateOne(
                { _id: itemId },
                { $set: { quantity: item.quantity - 1 } }
            );
        }

        return { success: true, message: "Item purchased successfully" };
    } catch (error) {
        console.error("Error buying item: ", error);
        return { success: false, message: "An error occurred while buying the item." };
    }
}