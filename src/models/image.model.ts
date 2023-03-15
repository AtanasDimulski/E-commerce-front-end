import { Guid } from "guid-typescript";
import { Product } from "./product.model";

export class Image{
    constructor(
        public imageId: Guid,
        public name: string, 
        public color:string, 
        public product:Product ){}
}