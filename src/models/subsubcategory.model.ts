import { Guid } from "guid-typescript";
import { Product } from "./product.model";
import { Subcategory } from "./subcategory.model";

export class Subsubcategory{
    constructor(
        public subsubCategoryId: Guid,
        public name: string, 
        public subcategory:Subcategory,
        public products:Product[]){}
}