const cds = require('@sap/cds');
const validation = require('./common/validation')
const crud = require('./common/crud')
const xsenv = require("@sap/xsenv");





class CatalogRest extends cds.ApplicationService {
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

module.exports = { CatalogRest };
