
import { AppServerConstant } from "../constants/constant";
import { logger } from "../utils/logger";
import { UserModel } from "../app/users/user.model";
import { RoleModel } from "../app/role/role.model";
import { BookModel } from "../app/books/book.model";

export class ModelLoader
{

    private static instance: ModelLoader;
     private  UserModel:UserModel;
     private RoleModel : RoleModel;
     private BookModel :  BookModel;
    

    private constructor ()
    {
         this.UserModel=UserModel.getInstance();
         this.RoleModel = RoleModel.getInstance();
         this.BookModel = BookModel.getInstance();
        
    }

    public static getInstance (): ModelLoader
    {
        if ( !ModelLoader.instance )
        {
            ModelLoader.instance = new ModelLoader();
        }
        return ModelLoader.instance;
    }

    public initializeModels ( ): void
    {
        try
        {
            this.UserModel.initializeModel();
            this.RoleModel.initializeModel();
            this.BookModel.initializeModel();
           

        } catch ( error )
        {
            logger.error( `${ AppServerConstant.ERROR_MESSAGES.DB_MODELS_INIT_FAILED } - ${ error.message }` );
            console.log( error )
        }
    }

    public associateModels (): void
    {
        try
        {
            //  this.UserModel.associateModel();
            // this.companyModel.associateModel();
            // this.roleModel.associateModel();
            // this.projectModel.associateModel();
            
        } catch ( error )
        {
            
            logger.error( `${ AppServerConstant.ERROR_MESSAGES.DB_MODELS_ASSOCIATION_FAILED } - ${ error.message }` );
            console.log( error );

        }
    }
    
}


