import { Document } from "mongoose";

export interface ProductInt extends Document{
    readonly name: string;
    readonly description: string;
    readonly imageURL: String;
    readonly price: number;
    readonly createAT: Date;    
}