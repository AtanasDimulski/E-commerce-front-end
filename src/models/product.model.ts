import { Guid } from "guid-typescript";
import { Category } from "./category.model";
import { Customer } from "./customer.model";
import { Orderproduct } from "./orderproduct.model";
import {Image} from "./image.model";
import { Brand } from "./brand.model";
import { Subsubcategory } from "./subsubcategory.model";
import { Favourite } from "./favourite.model";
import { Productsize } from "./productsize.model";

export class Product{
    constructor(public productId: Guid,
         public name: string,
         public shortDesc:string,
         public longDesc:string,
         public youtubeLink:string,
         public totalRating:number,
         public status:number,
         public productSizes:Productsize[],
         public images:Image[],
         public comments:Comment[],
         public orderProducts:Orderproduct[],
         public brand:Brand,
         public subsubcategory:Subsubcategory,
         public favourites:Favourite[]){}
}