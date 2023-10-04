import { Planete } from "@/classes/Planete"
import { Ressource } from "@/classes/Ressource"

export class User{
    id: number
    name: string
    planetes?: Planete[]
    ressources?: Ressource[]

    constructor(id: number, name: string, planetes: Planete[], ressource: Ressource[]) {
        this.id = id
        this.name = name
        this.planetes = planetes
        this.ressources = ressource
    }
}