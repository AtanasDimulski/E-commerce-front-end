import { Guid } from "guid-typescript";
import { Customer } from "./customer.model";
import { Product } from "./product.model";

export class Favourite{
    constructor(
        public favouriteId: Guid,
        public product:Product,
        public customer:Customer){}
}