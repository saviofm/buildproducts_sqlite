using buildproducts as buildproducts from '../db/data-model';


service CatalogService {// @( requires:'authenticated-user') {
 
     entity Products as projection on buildproducts.Products ;

    type product {};

    function getEAN (barcode: String)  returns product;

    action loadProducts() returns {};


    function loadProductsGet (update: String)  returns product;
    
}
