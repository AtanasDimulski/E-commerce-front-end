import { Guid } from "guid-typescript";
import { Category } from "./category.model";
import { Customer } from "./customer.model";
import { Orderproduct } from "./orderproduct.model";
import { Voucher } from "./voucher.model";

export class Order{
    constructor(public orderId: Guid,
         public name: string,
         public email:string,
         public fname:string,
         public lname:string,
         public transport:string,
         public city:string,
         public postCode:number,
         public address:string,
         public createdAt:Date,
         public presentPack: boolean,
         public insurance: boolean,
         public total: number,
         public customer: Customer,
         public voucher: Voucher,
         public orderProducts: Orderproduct[]){}
}