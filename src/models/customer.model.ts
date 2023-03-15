import { Guid } from "guid-typescript";
import { Favourite } from "./favourite.model";
import { Order } from "./order.model";

export class Customer{
    constructor(public customerId: Guid,
        public email: string,
        public password:string,
        public role:string,
        public favourites:Favourite[],
        public orders:Order[],
        public comments:Comment[]){}
}