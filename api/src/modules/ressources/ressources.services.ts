import { Resources } from "@/db/models/Ressource";
import * as console from "console";
import {ObjectId} from "mongodb";

export async function getAllResourcesForAUser(userId: ObjectId) {

  console.log(userId);
  const resources = await Resources.find({ id_user: userId }).toArray();
  if (resources.length === 0) {
    return { success: false, message : "No resources available."}
  }
  console.log("ressources récupérées :", resources);
  return { success: true, message : "success", resources }
}
