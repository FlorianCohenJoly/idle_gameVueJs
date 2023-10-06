import { Ressources } from "@/db/models/Ressource";

export async function getAllResources(name: string) {

    const resourceNames = await Ressources.find({ name: { $ne: name }  }).toArray();
    if (!resourceNames) {
        return { success: false, message : "No resources available."}
    }
    console.log("Noms des ressources récupérés :", resourceNames); 
    return { success: true, message : "success", resourceNames }

}

