import { Ressources } from "@/db/models/Ressource";
import { Ressource } from "@/types/ressources.types";
import { WithId } from "mongodb";

export function getAllResources() {
  return Ressources.find<WithId<Ressource>>({}).toArray();
}



