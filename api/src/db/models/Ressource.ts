import { Resource } from "@/types/ressources.types";
import { db } from "../mongo";

export const Resources = db!.collection<Resource>('resources')
