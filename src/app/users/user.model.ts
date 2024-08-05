import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import { userSchema } from './user.schema';


export class UserModel {
    private static instance: UserModel;
     public user: any;

    private constructor() {
        // Private constructor to enforce singleton pattern
    }

    public static getInstance(): UserModel {
        if (!UserModel.instance) {
            UserModel.instance = new UserModel();
        }
        return UserModel.instance;
    }

    public async initializeModel(): Promise<void> {
        try {
        
            this.user = mongoose.model('Users', userSchema);
  
          
        } catch (error) {
            console.error('Error initializing the model:', error);
            throw error;
        }
    }


    // public async addUser(): Promise<void> {
    //     try {

    //         // console.log("🚀 ~ UserModel ~ addUser ~ connected:", connected)
    //         // const userData = {
             
    //         // };
    //         // console.log("🚀 ~ UserModel ~ addUser ~ userData:", userData);


    //         const newUser = new this.user({
    //           id:5,
    //           name: 'Adithya Khale',
    //           address: '123 Main St, Anytown, USA',
    //           authPerson: 'Jane Smith',
    //           authContact: '555-1234',
    //           createdAt: new Date(),
    //           updatedAt: new Date(),
    //         });

    //         // const newItem = new this.user(userData);
    //         // console.log("🚀 ~ UserModel ~ addUser ~ newItem:", newItem)
    //         await newUser.save();

    //         // await this.user.create(userData);
    //         console.log('Successfully Created');


    //     } catch (error) {
    //         console.error('Error adding user:', error);
    //         throw error;
    //     }
    // }
}
