const baseLink = "https://grimobgbackend.azurewebsites.net";
const endPoints = {



// ------------BASE CONTROLLERS-----------------

    //BRAND CONTROLLER
    getAllBrands : baseLink+"/api/brands/getAll", // GET req
    getByIdBrand: baseLink+"/api/brands/",  // + /{id} GET req
    insertBrand:baseLink+"/api/brands/insert",// POST req + FormData
    deleteBrand:baseLink+"/api/brands/delete/", // + {id} DELETE req

    //IMAGE CONTROLLER
    getAllImages : baseLink+"/api/images/getAll",// GET req
    getByNameImage: baseLink+"/api/images/",  // + /{name} GET req
    insertImage: baseLink+"/api/images/insert", // POST req + FormData
    deleteImage: baseLink+"/api/images/", //+ {id} DELETE req

     //PRODUCT CONTROLLER
    getAllProducts : baseLink+"/api/products/getAll",// GET req
    getByIdProduct:baseLink+ "/api/products/",  // + /{id} GET req
    insertProduct: baseLink+"/api/products/insert", // POST req + FormData
    deleteProduct: baseLink+"/api/products/", //+ {id} DELETE req

    //PRODUCTSIZE CONTROLLER
    getAllProductSizes:baseLink+"/api/productSizes/getAll", // GET req
    insertProductSize: baseLink+"/api/productSizes/insert", // POST req + FormData
    deleteProductSize: baseLink+"/api/productSizes/", //+ {id} DELETE req

    //SIZE CONTROLLER
    getAllSizes : baseLink+"/api/sizes/getAll",// GET req
    insertSize: baseLink+"/api/sizes/insert", // POST req + FormData
    deleteSize: baseLink+"/api/sizes/", //+ {id} DELETE req

    //CATEGORIES CONTROLLER
    getAllCategories : baseLink+"/api/categories/getAllCategories",// GET req
    getAllSubCategories : baseLink+"/api/categories/getAllSubcategories",// GET req
    getAllSubsubCategories : baseLink+"/api/categories/getAllSubsubcategories",// GET req
    attachsubtocat:baseLink+"/api/categoriesRel/attachSubToCat?", //POST req + catid and subid
    attachsubsubtosub:baseLink+"/api/categoriesRel/attachSubsubToSub?", //POST req + subid and subsubid

    //CUSTOMER CONTROLLER
    getUser : baseLink+"/api/getUser",// GET req + email



    //AUTHENTICATION CONTROLLER
    register:baseLink+"/api/register", //POST req + FormData
    logIn:baseLink+"/api/authenticate", //POST req + FormData


// ------------RELATIONSHIP CONTROLLERS-----------------



    //PRODUCT BRAND CONTROLLER
    attachProductToBrand:baseLink+"/api/productBrands/attach?", // POST req + parentId and childId
    detachProductFromBrand:baseLink+"/api/productBrands/dettach?", // POST req + parentId and childId
    getAllProductsByBrand:baseLink+"/api/productBrands/getAllByParent", // GET req + id

    //PRODUCT IMAGE CONTROLLER
    attachImageToProduct:baseLink+"/api/productImages/attach?", // POST req + parentId and childId
    detachImageFromProduct:baseLink+"/api/productImages/dettach?", // POST req + parentId and childId
    getAllImagesByProduct:baseLink+"/api/productImages/getAllByParent", // GET req

    //PRODUCT SIZE CONTROLLER
    attachProductSizeToProductandSize:baseLink+"/api/productSizes/attach?", // POST req + parentId and childId
    detachProductSizeFromProductandSize:baseLink+"/api/productSizes/dettach?", // POST req + parentId and childId
    getAllProductSizesByProduct:baseLink+"/api/productSizes/getAllByParent", // GET req + id

    //PRODUCT SUBSUBCATEGORY CONTROLLER
    attachProductToSubsubcategory:baseLink+"/api/productSubsubcategory/attach?", // POST req + parentId and childId
    detachProductFromSubsubcategory:baseLink+"/api/productSubsubcategory/dettach?", // POST req + parentId and childId
    getAllProductsBySubsubcategory:baseLink+"/api/productSubsubcategory/getAllByParent", // GET req + id




// ------------BLOB CONTROLLERS-----------------

    //BLOB CONTROLLER
    uploadImage : baseLink+"/api/blob/upload",// POST req + FormData
    getImageByNameBlob: baseLink+"/api/blob/get/", // GET req + name
    deleteImageBlob: baseLink+"/api/blob/delete/", //+ DELETE req + name
  };

  export default endPoints;
