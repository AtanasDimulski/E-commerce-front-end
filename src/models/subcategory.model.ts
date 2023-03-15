import { Guid } from "guid-typescript";
import { Category } from "./category.model";
import { Subsubcategory } from "./subsubcategory.model";

export class Subcategory{
    constructor(
        public subCategoryId: Guid, 
        public name: string, 
        public category:Category, 
        public subsubcategory:Subsubcategory[]){}
}