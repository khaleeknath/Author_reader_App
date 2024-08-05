import { UserModel } from "../users/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const ENVConfig = require(`../../config/${process.env.NODE_ENV}.json`);
export class AuthenticationService {
  private readonly userModel: UserModel;


  constructor() {
    this.userModel = UserModel.getInstance();

  }

  public async signToken(id): Promise<any> {
    return jwt.sign({ id: id }, ENVConfig.SECRET_KEY);
  }

//For Disablethe Submit Button on DashBoard 
  public async signToke(user): Promise<any> {
    return jwt.sign({ id: user.id, role: user.role }, ENVConfig.SECRET_KEY);
  }

	public verifyToken(token) {
		try{
			return  jwt.verify(token, ENVConfig.SECRET_KEY);
		}
		catch(error) {
        return null;
		}
	}


 

  public async registerUser(data): Promise<any> {

    try {

      const registerUser = new this.userModel.user(data);
      await registerUser.save();

      return registerUser;

    }
    catch (error) {
      error.statusCode = 400;
      console.log(error);
      throw error;
    }
  }

   
    //This is function for login the User.
  public async login(mobile: string, password: string): Promise<any> {

    try {


      let result = null;

      const userData = await this.userModel.user.findOne({ authContact: mobile });

      if (!userData || !bcrypt.compareSync(password, userData.password)) {

        throw new Error("wrong user id or password");

      } else {

        const token = await this.signToken(userData.id);



        const updateUser = await this.userModel.user.updateOne(
          { id: userData.id }, // Filter to find the user by id
          { $set: { token: token } } // Update the token field
        );



        const updatedUser = await this.userModel.user.findOne({ authContact: mobile });
        result = updatedUser;
      }



      return result;
    }
    catch (error) {
      error.statusCode = 400;
      console.log(error);
      throw error;
    }
  }

  //This is the function for logout User.
  public async logout(user): Promise<any> {
    try {
      const updateUser = await this.userModel.user.updateOne(
        { id: user.id }, 
        { $set: { token: '' } } 
      );
    } catch (error) {
      throw error;
    }
  }




}
