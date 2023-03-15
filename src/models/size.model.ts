import { Guid } from "guid-typescript";
import { Category } from "./category.model";
import { Customer } from "./customer.model";
import { Productsize } from "./productsize.model";

export class Size{
    constructor(public sizeId: Guid,
         public size_amount: string,
         public color:string,
         public productSizes: Productsize[]){}
}