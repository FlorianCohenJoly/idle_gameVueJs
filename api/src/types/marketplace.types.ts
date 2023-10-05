export interface Item {
    id_user : number | undefined;
    id_user_ressource : number;
    quantity: number;
    isBought: boolean;
}

export interface ItemBody {
    id_user : number;
    id_user_ressource : number;
    quantity: number;
    isBought: boolean;
}