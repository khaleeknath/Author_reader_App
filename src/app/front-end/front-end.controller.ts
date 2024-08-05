
import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { handleTemplate } from "../../utils/app.util";
import { IRequest } from "../authentication/authentication.interface";
import { FrontEndService } from "./front-end.service";

export class FrontEndController {

  private readonly frontendService: FrontEndService;

  constructor() {
  
    this.frontendService = new FrontEndService();
  
  }

  public async getLoginPage(
    req: IRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      handleTemplate(res, "pages/login", {});
    } catch (error) {
      error.statusCode = 400;
      handleTemplate(res, "pages/error", null);
      return next(error);
    }
  }

  public async checkCredentials(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      console.log(req.body);

      const login = await this.frontendService.checkCredentials(
        req.body.mobile,
        req.body.password
      );

      console.log("login>>>", login);

      res.cookie("token", login.token);
      res.cookie("user", login);
      res.cookie("company", login.companyId);

      //   res.clearCookie("branchId");

      res.redirect("/dashboard");
    } catch (error) {
      console.log(error);

      error.statusCode = 400;
      // return next( error );

      res.redirect("/?error=Please enter correct password.");
    }
  }

  
}
