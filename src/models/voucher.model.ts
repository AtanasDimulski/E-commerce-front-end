import { Guid } from "guid-typescript";
import { Order } from "./order.model";

export class Voucher{
    constructor(public voucherId: Guid,
         public code: string,
         public promotion:number,
         public order:Order){}
}