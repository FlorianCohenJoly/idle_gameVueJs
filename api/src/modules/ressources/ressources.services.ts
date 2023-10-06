import {Resources} from "@/db/models/Ressource";
import * as console from "console";
import {EnhancedOmit, InferIdType, ObjectId} from "mongodb";
import {SimpleUser} from "@/types/auth.types";
import {Users} from "@/db/models/User";

export async function getAllResourcesForAUser(user: (EnhancedOmit<SimpleUser, "_id"> & { _id: InferIdType<SimpleUser> }) | null | undefined) {

    // @ts-ignore
    const resources = await Resources.find({id_user: user}).toArray();
    if (resources.length === 0) {
        return {success: false, message: "No resources available."}
    }
    console.log("ressources récupérées :", resources);
    return {success: true, message: "success", resources}
}

export async function getAllRessources(userId: ObjectId) {
    const user = await Users.findOne({_id: userId})
    if (!user) {
        return {success: false, message: "Utilisateur n'existe pas"}
    }

    const ressources = await Resources.find({id_user: userId}).toArray();
    if (ressources.length === 0) {
        console.log(ressources)
        return {success: false, message: "No resources available."}
    }

    return {success: true, message: "succes", ressources: ressources}
}