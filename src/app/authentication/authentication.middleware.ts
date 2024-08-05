import { NextFunction, Request, Response } from "express";
 import { UserModel } from "../users/user.model";
import jwt from 'jsonwebtoken';
import { IRequest } from "./authentication.interface";
const ENVConfig = require( `../../config/${ process.env.NODE_ENV }.json` );

export class AuthenticationMiddleWare
{
   private readonly userModel: UserModel;
  
    constructor ()
    {
         this.userModel = UserModel.getInstance();
    }


    //This function is to check  whether the user which is login is making the API calls.
    public async protect ( req: IRequest, res: Response, next: NextFunction ): Promise<any>
    {

        try
        {
            //1 getting token 
            let token;

            if ( !req.headers.authorization )
            {
                throw new Error( "You are not logged in!" )

            }
            if ( req.headers.authorization && req.headers.authorization.startsWith( "Bearer" ) )
            {
                token = req.headers.authorization.split( ' ' )[ 1 ];
            }

            if ( !token )
            {

                new Error( "You are not logged in!" )
            }
            // console.log(token)
            //2) verify token 
            const decoded: any = jwt.verify( token, ENVConfig.SECRET_KEY );
             console.log(decoded);

            //3)check if user still exists
            const freshUser = await this.userModel.user.findOne(  { id: decoded.id} );
        

            if ( !freshUser.token )
            {
                throw new Error( "User is logged out!" )
            }
            if ( !freshUser )
            {
                new Error( "The user belonging to this token does not exist" )
            }
            // // req.session['user']=freshUser;
            req.user = freshUser;

            // console.log(req.user);
            next();
        } catch ( error )
        {
            console.log( error )
            error.statusCode = 404;

            return next( error )
        }
    }



    
    
    public async authorizeAuthor ( req: IRequest, res: Response, next: NextFunction ): Promise<void>
    {

        try
        {

            
            if (req.user.roleId.toString() == '66af73af655451ae8cd0b57c')
            {
                next();


            } else
            {
                throw new Error( "you are not authorized to access this route" )

            }

        } catch ( error )
        {
            error.statusCode = 403;

            return next( error );
        }
    }

    public async authorizeReader ( req: IRequest, res: Response, next: NextFunction ): Promise<void>
    {

        try
        {
     
            if ( req.user.roleId.toString() == '66af73af655451ae8cd0b57d')
            {
                
                next();


            } else
            {
                throw new Error( "you are not authorized to access this route" )

            }

        } catch ( error )
        {
            error.statusCode = 403;

            return next( error );
        }
    }


    public async authorizeAuthorReader(req:IRequest,res:Response,next:NextFunction):Promise<void>{
        try {
            
            if (  req.user.roleId.toString() == '66af73af655451ae8cd0b57c' || req.user.roleId.toString() == '66af73af655451ae8cd0b57d')
            {


                next();


            } else
            {

                throw new Error( "you are not authorized to access this route" );

                
            }
            
        } catch (error) {
            
            error.statusCode=400;
            return next(error);

        }
    }

}