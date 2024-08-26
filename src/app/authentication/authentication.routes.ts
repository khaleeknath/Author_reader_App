import { Router } from "express";
import { AppApiConstant } from "../../constants/api.constant";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationMiddleWare } from "./authentication.middleware";
// sudo systemctl start  mongod
export class AuthenticationRoutes
{

    public router: Router;
    private readonly authenticationController: AuthenticationController;
    private readonly authenticationMiddleware: AuthenticationMiddleWare;

    constructor ()
    {

        this.router = Router();
        
        this.authenticationController = new AuthenticationController();
        this.authenticationMiddleware = new AuthenticationMiddleWare();
        
        this.routes();
    }

    public routes (): void
    {

        this.router.post(
            AppApiConstant.API.REGISTER,
            this.authenticationMiddleware.checkBodyForRegisterUser.bind(this.authenticationMiddleware),
            this.authenticationController.registerUser.bind( this.authenticationController )
        );

        this.router.post(
            AppApiConstant.API.LOGIN,
            this.authenticationController.loginUser.bind( this.authenticationController )
        );

        this.router.get(

            AppApiConstant.API.LOGOUT,
            this.authenticationMiddleware.protect.bind( this.authenticationMiddleware ),
            this.authenticationController.logoutUser.bind( this.authenticationController )
        
        );



    }
}