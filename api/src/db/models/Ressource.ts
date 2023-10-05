import { Ressource } from "@/types/ressources.types";
import { db } from "../mongo";

export const Ressources = db!.collection<Ressource>('ressources')
