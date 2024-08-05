import { Router } from "express";
import { threadId } from "worker_threads";
import { AppApiConstant } from "../../constants/api.constant";
import { FrontEndController } from "./front-end.controller";

export class FrontEndRoutes {
  public router: Router;

  private readonly frontEndController: FrontEndController;

  constructor() {
    this.router = Router();
    this.frontEndController = new FrontEndController();
    this.routes();
  }

  public routes(): void {
    
    this.router.get(
      AppApiConstant.PAGE.LOGIN,
      this.frontEndController.getLoginPage.bind(this.frontEndController)
    );
  }
}
