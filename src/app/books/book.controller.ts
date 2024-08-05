import { NextFunction, Request, Response } from "express";
import { AppServerConstant } from "../../constants/constant";
import { handleResult } from "../../utils/app.util";
import { IRequest } from "../authentication/authentication.interface";

import { BookService } from "./book.service";

export class BookController
{

    private bookService : BookService;

    constructor ()
    {
        this.bookService = new BookService();
    }




   
    public async createBook( req: IRequest, res: Response, next: NextFunction ): Promise<any>
    { 

        try
        {

            const createBook = await this.bookService.createBook( req.body );
            
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, createBook );

        } catch (error) {
            error.statusCode = 400; 
            return next( error );    
        }


    }



     
    public async updateBook( req: IRequest, res: Response, next: NextFunction ): Promise<any>
    { 

        try
        {

            const createBook = await this.bookService.updateBook( req.body , req.params.bookId);
            
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, createBook );

        } catch (error) {
            error.statusCode = 400; 
            return next( error );    
        }


    }

    public async changeBookStatus( req: IRequest, res: Response, next: NextFunction ): Promise<any>
    { 

        try
        {

            const createBook = await this.bookService.changeBookStatus( req.params.bookId);
            
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, createBook );

        } catch (error) {
            error.statusCode = 400; 
            return next( error );    
        }


    }


    public async getBookList( req: IRequest, res: Response, next: NextFunction ): Promise<any>
    { 

        try
        {   
            const bookList = await this.bookService.getBookList(req.user, req.query.title);
            
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, bookList );

        } catch (error) {
            error.statusCode = 400; 
            return next( error );    
        }


    }

    public async getAuthorList( req: IRequest, res: Response, next: NextFunction ): Promise<any>
    { 

        try
        {   
            const bookList = await this.bookService.getAuthorList();
            
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, bookList );

        } catch (error) {
            error.statusCode = 400; 
            return next( error );    
        }


    }


    public async getBookListByAuthorId( req: IRequest, res: Response, next: NextFunction ): Promise<any>
    { 

        try
        {   
            const bookList = await this.bookService.getBookListByAuthorId(req.params.authorId);
            
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, bookList );

        } catch (error) {
            error.statusCode = 400; 
            return next( error );    
        }


    }


    public async getBookDetails( req: IRequest, res: Response, next: NextFunction ): Promise<any>
    { 

        try
        {   
            const bookDetails = await this.bookService.getBookDetails(req.params.bookId);
            
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, bookDetails );

        } catch (error) {
            error.statusCode = 400; 
            return next( error );    
        }


    }
}

 
    

