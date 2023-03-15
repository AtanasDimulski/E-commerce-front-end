import { Guid } from "guid-typescript";
import { Customer } from "./customer.model";
import { Product } from "./product.model";

export class Comment{
    constructor(public commentId: Guid,
        public description: string,
        public rating:number,
        public product:Product[],
        public customer:Customer){}
}