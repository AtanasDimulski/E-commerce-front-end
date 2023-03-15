import { Guid } from "guid-typescript";
import { Order } from "./order.model";
import { Product } from "./product.model";

export class Orderproduct{
    constructor(public orderProductId: Guid,
         public order:Order,
         public product:Product,
         public quantity:number,
         public price: number){}
}