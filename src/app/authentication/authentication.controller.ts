import { NextFunction, Request, Response } from "express";
import { AppServerConstant } from "../../constants/constant";
import { handleResult } from "../../utils/app.util";
import { IRequest } from "./authentication.interface";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationController
{

    private authenticationService: AuthenticationService;

    constructor ()
    {
        this.authenticationService = new AuthenticationService();
    }


    public async registerUser ( req: Request, res: Response, next: NextFunction ): Promise<any>
    {

        try
        {
            const user = await this.authenticationService.registerUser(req.body);
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, user );

        } catch ( error )
        {
            console.log( error )
            return next( error );
        }

    }

    public async loginUser ( req: Request, res: Response, next: NextFunction ): Promise<any>
    {

        try
        {
            console.log("🚀 ~  req.body:",  req.body)
            const user = await this.authenticationService.login( req.body.authContact, req.body.password );
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, user );

        } catch ( error )
        {
            console.log( error )
            return next( error );
        }

    }


    public async logoutUser ( req: IRequest, res: Response, next: NextFunction ): Promise<any>
    { 

        try
        {
            
            console.log("🚀 ~ req.user:", req.user)
            const user = await this.authenticationService.logout( req.user );
            
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, user );

        } catch (error) {
            error.statusCode = 400; 
            return next( error );    
        }


    }

    // public async forgotPassword(
    //     req: IRequest,
    //     res: Response,
    //     next: NextFunction
    //   ): Promise<any> {
    //     try {
    //       const user = await this.authenticationService.forgotPassword(
    //         req.body
    //       );
    
    //       handleResult(
    //         res,
    //         AppServerConstant.RESPONSE_CODE.OK,
    //         AppServerConstant.SUCCESS_MESSAGES.SUCCESS,
    //         user
    //       );
    //     } catch (error) {
    //       error.statusCode = 400;
    //       return next(error);
    //     }
    //   }


    //   public async checkOTP(
    //     req: IRequest,
    //     res: Response,
    //     next: NextFunction
    //   ): Promise<any> {
    //     try {

    
    //       const user = await this.authenticationService.checkOTP(
    //         req.body
    //       );

    
    //       handleResult(
    //         res,
    //         AppServerConstant.RESPONSE_CODE.OK,
    //         AppServerConstant.SUCCESS_MESSAGES.SUCCESS,
    //         user
    //       );
    //     } catch (error) {
    //       error.statusCode = 400;
    //       return next(error);
    //     }
    //   }

    //   public async updatePassword(
    //     req: IRequest,
    //     res: Response,
    //     next: NextFunction
    //   ): Promise<any> {
    //     try {

    
    //       const user = await this.authenticationService.updatePassword(
    //         req.body
    //       );

    
    //       handleResult(
    //         res,
    //         AppServerConstant.RESPONSE_CODE.OK,
    //         AppServerConstant.SUCCESS_MESSAGES.SUCCESS,
    //         user
    //       );
    //     } catch (error) {
    //       error.statusCode = 400;
    //       return next(error);
    //     }
    //   }

    //   public async resetPassword(
      //   req: IRequest,
      //   res: Response,
      //   next: NextFunction
      // ): Promise<any> {
      //   try {
      //     const user = await this.authenticationService.resetPassword(req.body);
    
      //     handleResult(
      //       res,
      //       AppServerConstant.RESPONSE_CODE.OK,
      //       AppServerConstant.SUCCESS_MESSAGES.SUCCESS,
      //       user
      //     );
      //   } catch (error) {
      //     error.statusCode = 400;
      //     return next(error);
      //   }
      // }
}

 
    

