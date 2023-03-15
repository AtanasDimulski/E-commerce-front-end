import { Guid } from "guid-typescript";
import { Subcategory } from "./subcategory.model";

export class Category{
    constructor(public categoryId: Guid,
     public name: string,
     public subcategory:Subcategory[]){}
}