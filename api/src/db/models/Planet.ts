import {Planet} from "@/types/planet.type";
import {db} from "../mongo";

export const Planets = db!.collection<Planet>('planets')