import {Ressource} from "@/types/ressources.types";
export interface Item {
    id_user : string;
    ressource: Ressource;
    quantity: number;
    price: number;
}