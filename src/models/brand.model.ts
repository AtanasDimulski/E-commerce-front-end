import { Guid } from "guid-typescript";
import { Product } from "./product.model";

export class Brand{
    constructor(public brandId: Guid,
        public name: string,
        public description:string,
        public products:Product[]){}
}