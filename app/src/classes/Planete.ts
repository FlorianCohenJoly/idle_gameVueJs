import { Ressource } from "@/classes/Ressource";

export class Planete{
    id: number
    name: string
    price: number
    ressource : Ressource

    constructor(id: number, name: string, price: number, ressource: Ressource) {
        this.id = id
        this.name = name
        this.price = price
        this.ressource = ressource
    }
}

