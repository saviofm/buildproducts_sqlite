using productstrainning as productstrainning from '../db/data-model';


service CatalogService {// @( requires:'authenticated-user') {
 
     entity Products as projection on productstrainning.Products ;

    type product {};

    function getEAN (barcode: String)  returns product;

}
