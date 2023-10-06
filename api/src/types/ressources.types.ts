import {ObjectId} from "mongodb";

export interface Resource {
    _id: ObjectId;
    name: string;
    id_user: ObjectId;
    quantity: number;
}
