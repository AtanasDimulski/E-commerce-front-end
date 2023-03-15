import { Guid } from "guid-typescript";
import { Category } from "./category.model";
import { Customer } from "./customer.model";
import { Product } from "./product.model";
import { Size } from "./size.model";

export class Productsize{
    constructor(public productSizeId: Guid,
         public price:number,
         public fakePrice: number,
         public product: Product,
         public size:Size){}
}