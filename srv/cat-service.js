const cds = require('@sap/cds');
const validation = require('./common/validation')
const crud = require('./common/crud')
const xsenv = require("@sap/xsenv");



class CatalogService extends cds.ApplicationService {
    init() {
        
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // INIT - Instanciando S3                                                           //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//

        xsenv.loadEnv();

        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // getEAN - API EAN                                                                 //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        
        this.on('getEAN',  async (req) => {  
            return await crud.getEANAPI(req);   
        
        }); 

        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // PRODUCTS - Create - Valida se o EAN já existe                                    //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        this.before('CREATE', ['Products', 'ProductsFiori'], async (req) => {
              //await validation.ProductCreate(req);   



        
            });
  
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // PRODUCTS - Create - Obtém o Content e faz a criação                              //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        this.on('CREATE', ['Products','ProductsFiori'], async (req, next) => {

        }); 
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // PRODUCTS - READ -  Obtém o stream                         //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        this.on('READ', ['Products','ProductsFiori'], (req, next) => {

        });
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // PRODUCTS - READ - Obtém o url                            //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        this.after('READ', ['Products','ProductsFiori'], (each, req) => {
       
        });
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // Products - UPDATE - Verifica se o EAN existe e é diferente do produto atual      //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        this.before('UPDATE', ['Products', 'ProductsFiori'], async (req) => {  
            return await validation.ProductUpdate(req);  
        });

        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // Products - UPDATE - Verifica conteúdo                                            //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        this.on('UPDATE', ['Products','ProductsFiori'], async (req, next) => {
           
        });

        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // Products - DELETE - Elimina conteúdo                                            //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        this.before('DELETE', ['Products','ProductsFiori'], async (req) => {
           
            await validation.ProductDelete(req);

            
        });
     

        return super.init();
    }
}

module.exports = { CatalogService };
