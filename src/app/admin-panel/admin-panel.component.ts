import { Component, OnInit } from '@angular/core';
import {Image} from '../../models/image.model';
import {BrandService} from '../../services/BaseServices/brand.service';
import {BlobService} from '../../services/BaseServices/blob.service';
import {ProductService} from '../../services/BaseServices/product.service';
import {ImageService} from '../../services/BaseServices/image.service';
import {SizeService} from '../../services/BaseServices/size.service';
import {CategoriesService} from '../../services/BaseServices/categories.service';
import {ProductSizeBaseService} from '../../services/BaseServices/product-size-base.service';
import {ProductBrandService} from '../../services/RelationshipServices/product-brand.service';
import {ProductImageService} from '../../services/RelationshipServices/product-image.service';
import {ProductSizeRelationshipService} from '../../services/RelationshipServices/product-size-relationship.service';
import {ProductSubsubcategoryService} from '../../services/RelationshipServices/product-subsubcategory.service';
import { Guid } from 'guid-typescript';
import { Size } from 'src/models/size.model';
import { Brand } from 'src/models/brand.model';
import { Category } from 'src/models/category.model';
import { Subsubcategory } from 'src/models/subsubcategory.model';
import { Subcategory } from 'src/models/subcategory.model';
import { Productsize } from 'src/models/productsize.model';
import { Product } from 'src/models/product.model';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  titleImage = document.getElementById("titleImage") as HTMLImageElement;
  uploaded: Image[];
  sizes:Size[];
  brands:Brand[];
  categories:Category[];
  subcategories:Subcategory[];
  subsubcategories:Subsubcategory[];
  prodSizes:Productsize[];
  allProdSizes:Productsize[];
  products:Product[];
  images:Image[];

  prodSizeChosen:string;
  brandChosen:string;
  prodsubsubChosen:string;
  catChosen:string;
  subChosen:string;
  sub2Chosen:any;
  subsubChosen:any;
  isColor:boolean;
  file:any;
  filename = '';
  imageSource:string = '';
  formData:FormData;
  constructor(
    private brandServ:BrandService,
    private blobServ:BlobService,
    private imgServ:ImageService,
    private prodServ:ProductService,
    private sizeServ: SizeService,
    private catServ: CategoriesService,
    private prodSizeBaseServ:ProductSizeBaseService,
    private prodBrandServ:ProductBrandService,
    private prodImgServ:ProductImageService,
    private prodSizeRelServ:ProductSizeRelationshipService,
    private prodSubsubcatServ:ProductSubsubcategoryService
  ){

  }
  ngOnInit(){
    this.uploaded = [];
    this.brands = [];
    this.sizes = [];
    this.categories=[];
    this.subcategories=[];
    this.subsubcategories=[];
    this.allProdSizes = [];
    this.prodSizes = [];
    this.products = [];
    this.images = [];

    this.getAllSizes();
    this.getAllKindOfCategories();
    this.getAllBrands();
    this.getAllProductSizes();
    this.getAllImages();
  }
  setFilename(files) {
    if (files[0]) {
      this.file = <File>files[0];
      this.filename = files[0].name;
    }
    console.log(this.filename);
  }

  saveImg(name?:string){
    var id = Guid.create();
    for (var _i = 0; _i < this.images.length; _i++) {
      if(id==this.images[_i].imageId){
        id = Guid.create();
        _i = 0;
      }
    }
    var form = new FormData();
    var formImage = new FormData();
    if(name!=null){
      var img = new Image(id,this.filename,name,null);
      form.append("file",this.file);
      for ( var key in img ) {
        console.log(key+"  "+img[key]);
        formImage.append(key, img[key]);
      };
      this.uploaded.push(img);
      this.imgServ.InsertImage(formImage);
      this.blobServ.UploadImage(form);


    }
    else{
      var img = new Image(id,this.filename,"title",null);
      this.uploaded.push(img);
      form.append("file", this.file);
      for ( var key in img ) {
        console.log(key+"  "+img[key]);
        formImage.append(key, img[key]);
      };
      console.log(this.file.data);
      this.imgServ.InsertImage(formImage);
      this.blobServ.UploadImage(form);
      this.blobServ.GetBlobImageByName(this.filename).subscribe(x=>this.titleImage.src = x);

    }
  }
  setSizeOption(option:boolean){
    this.isColor = option;
    console.log(this.isColor);
  }

  createBrand(name,desc){
    var id = Guid.create();
    for (var _i = 0; _i < this.brands.length; _i++) {
      if(id==this.brands[_i].brandId){
        id = Guid.create();
        _i = 0;
      }
    }
    var brand = new Brand(id,name,desc,[]);
    var form = new FormData();
    for ( var key in brand ) {
      console.log(key+"  "+brand[key]);
      form.append(key, brand[key]);
    };
    this.brandServ.InsertBrand(form);
    this.getAllBrands();
  }

  createSize(name){
    var id = Guid.create();
    for (var _i = 0; _i < this.sizes.length; _i++) {
      if(id==this.sizes[_i].sizeId){
        id = Guid.create();
        _i = 0;
      }
    }
    if(this.isColor){
      var size = new Size(id,"",name,[])
      var form = new FormData();
      for ( var key in size ) {
        console.log(key+"  "+size[key]);
        form.append(key, size[key]);
      };
      this.sizeServ.InsertSize(form);
      this.getAllSizes();
    }
    else{
      var size = new Size(id,name,"",[])
      var form = new FormData();
      for ( var key in size ) {
        console.log(key+"  "+size[key]);
        form.append(key, size[key]);
      };
      this.sizeServ.InsertSize(form);
      this.getAllSizes();
    }

  }

  createProductSize(idSize,real,fake){
    var id = Guid.create();
    var tempSize;
    for (var _i = 0; _i < this.prodSizes.length; _i++) {
      if(id==this.prodSizes[_i].productSizeId){
        id = Guid.create();
        _i = 0;
      }
    }
    this.sizes.forEach(x=>{
      if(idSize=x.sizeId){
        tempSize = x;
      }
    });
    var prodSize = new Productsize(id,real,fake,null,tempSize);
    this.prodSizes.push(prodSize);
    var form = new FormData();
    for ( var key in prodSize ) {
      console.log(key+"  "+prodSize[key]);
      form.append(key, prodSize[key]);
    };
    this.prodSizeBaseServ.InsertProductSize(form);
    this.getAllProductSizes();
  }

  getAllKindOfCategories(){
    this.catServ.getAllCategories().subscribe(x=>this.categories = x);
    this.catServ.getAllSubcategories().subscribe(x=>{
      this.subcategories = x;
    });
    this.catServ.getAllSubsubcategories().subscribe(x=>this.subsubcategories = x);
  }
  getAllBrands(){
    this.brandServ.getAllBrands().subscribe(x=>this.brands = x);

  }
  getAllSizes(){
    this.sizeServ.getAllSizes().subscribe(x=>this.sizes = x);
  }
  getAllProductSizes(){
    this.prodSizeBaseServ.GetAllProductSizes().subscribe(x=>this.allProdSizes = x);

  }
  getAllProducts(){
    this.prodServ.getAllProducts().subscribe(x=>this.products = x);
  }

  getAllImages(){
    this.imgServ.getAllImages().subscribe(x=>this.images = x);
  }

  createProduct(name,shortDesc,longDesc,link){
    var id = Guid.create();
    var brand;
    var subsubcat;
    this.subsubcategories.forEach(x=>{
      if(x.name==this.prodsubsubChosen){
        subsubcat = x.subsubCategoryId;
      }
    });
    this.brands.forEach(x=>{
      if(x.name==this.brandChosen){
        brand = x.brandId;
      }
    });
    for (var _i = 0; _i < this.products.length; _i++) {
      if(id==this.products[_i].productId){
        id = Guid.create();
        _i = 0;
      }
    }
    var product = new Product(id,name,shortDesc,longDesc,link,5,1,[],[],[],[],null,null,[]);
    var form = new FormData();
    for ( var key in product ) {
      console.log(key+"  "+product[key]);
      form.append(key, product[key]);
    };
    this.prodServ.InsertProduct(form).subscribe(x=>{
      this.prodBrandServ.AttachProductToBrand(brand,id);
      this.prodSubsubcatServ.AttachProductToSubsubcategory(subsubcat,id);
      this.uploaded.forEach(x=>{
        this.prodImgServ.AttachImageToProduct(id,x.imageId);
       //localStorage.setItem()
      });
      this.prodSizes.forEach(x=>{
        this.prodSizeRelServ.AttachProductSizeToProductAndSize(x.size.sizeId,id,x.productSizeId);
      });
    });


  }

  AttachSubToCat(){
    var cattemp;
    var subtemp;
    this.categories.forEach(x=>{
      if(x.name==this.catChosen){
        cattemp = x.categoryId;
      }
    });
    this.subcategories.forEach(x=>{
      if(x.name==this.subChosen){

        subtemp = x.subCategoryId;
      }
    });

    this.catServ.attachSubToCat(cattemp,subtemp);
  }
  AttachSubsubToSub(){
    var subsubtemp;
    var subtemp;
    this.subsubcategories.forEach(x=>{
      if(x.name==this.subsubChosen){
        subsubtemp = x.subsubCategoryId;
      }
    });
    this.subcategories.forEach(x=>{
      if(x.name==this.sub2Chosen){
        subtemp = x.subCategoryId;
      }
    });
    this.catServ.attachSubsubToSub(subtemp,subsubtemp);
  }
}
