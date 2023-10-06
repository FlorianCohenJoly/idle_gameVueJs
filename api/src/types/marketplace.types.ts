import {Resource} from "@/types/ressources.types";
export interface Item {
    id_user : string;
    resource: Resource;
    quantity: number;
    price: number;
}