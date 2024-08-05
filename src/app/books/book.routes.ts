import { Router } from "express";
import { AppApiConstant } from "../../constants/api.constant";
import { BookController } from "./book.controller";
import { AuthenticationMiddleWare } from "../authentication/authentication.middleware";


export class BookRoutes
{

    public router: Router;
    private readonly BookController: BookController;
    private readonly authenticationMiddleware : AuthenticationMiddleWare;


    constructor ()
    {

        this.router = Router();
        
        this.BookController = new BookController();
        this.authenticationMiddleware = new AuthenticationMiddleWare();

        
        this.routes();
    }

    public routes (): void
    {

        this.router.post(

            AppApiConstant.API.CREATE_BOOK,
            this.authenticationMiddleware.protect.bind( this.authenticationMiddleware ),
            this.authenticationMiddleware.authorizeAuthor.bind(this.authenticationMiddleware),
            this.BookController.createBook.bind( this.BookController )
        
        );


        this.router.patch(

            AppApiConstant.API.UPDATE_BOOK +AppApiConstant.API.BOOKID + AppApiConstant.API.BOOK_ID,
            this.authenticationMiddleware.protect.bind( this.authenticationMiddleware ),
            this.authenticationMiddleware.authorizeAuthor.bind(this.authenticationMiddleware),
            this.BookController.updateBook.bind( this.BookController )
        
        );

        this.router.patch(

            AppApiConstant.API.CHANGE_PUBLISH_STATUS +AppApiConstant.API.BOOKID + AppApiConstant.API.BOOK_ID,
            this.authenticationMiddleware.protect.bind( this.authenticationMiddleware ),
            this.authenticationMiddleware.authorizeAuthor.bind(this.authenticationMiddleware),
            this.BookController.changeBookStatus.bind( this.BookController )
        
        );


        this.router.get(

            AppApiConstant.API.BOOK_LIST ,
            this.authenticationMiddleware.protect.bind( this.authenticationMiddleware ),
            this.authenticationMiddleware.authorizeAuthor.bind(this.authenticationMiddleware),
            this.BookController.getBookList.bind( this.BookController )
        
        );


        this.router.get(

            AppApiConstant.API.AUTHOR_LIST ,
            this.authenticationMiddleware.protect.bind( this.authenticationMiddleware ),
            this.authenticationMiddleware.authorizeReader.bind(this.authenticationMiddleware),
            this.BookController.getAuthorList.bind( this.BookController )
        
        );




        this.router.get(

            AppApiConstant.API.GET_BOOKS_BY_AUTHOR_ID +  AppApiConstant.API.AUTHORID +  AppApiConstant.API.AUTHOR_ID ,
            this.authenticationMiddleware.protect.bind( this.authenticationMiddleware ),
            this.authenticationMiddleware.authorizeReader.bind(this.authenticationMiddleware),
            this.BookController.getBookListByAuthorId.bind( this.BookController )
        
        );


        this.router.get(

            AppApiConstant.API.GET_BOOKS_BY_AUTHOR_ID +  AppApiConstant.API.AUTHORID +  AppApiConstant.API.AUTHOR_ID ,
            this.authenticationMiddleware.protect.bind( this.authenticationMiddleware ),
            this.authenticationMiddleware.authorizeReader.bind(this.authenticationMiddleware),
            this.BookController.getBookListByAuthorId.bind( this.BookController )
        
        );


        this.router.get(

            AppApiConstant.API.GET_BOOK_DETAILS +  AppApiConstant.API.BOOKID +  AppApiConstant.API.BOOK_ID ,
            this.authenticationMiddleware.protect.bind( this.authenticationMiddleware ),
            this.authenticationMiddleware.authorizeAuthorReader.bind(this.authenticationMiddleware),
            this.BookController.getBookDetails.bind( this.BookController )
        
        );



    }
}