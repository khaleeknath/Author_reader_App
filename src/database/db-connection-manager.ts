// DB Connection Manager
import { Sequelize } from 'sequelize';
import { MongoClient, Db } from 'mongodb';
import { logger } from '../utils/logger';
import { handleError } from '../helpers/error.helper';
import { AppServerConstant } from '../constants/constant';
import { DatabaseConfig } from '../core/base.interface';
import { ModelLoader } from './models';
// import { userSchema } from '../app/users/user.schema';
import mongoose from 'mongoose';

const ENVConfig = require(`../config/${process.env.NODE_ENV}.json`);

/**
 * Manages all aspects of database connection.
 * @export
 * @class AppDBConnectionManager
 */
export class AppDBConnectionManager {

    private static instance: AppDBConnectionManager;
    public dbClient: MongoClient;
    private databaseConfig: DatabaseConfig;
    private modelLoader: ModelLoader;

    /**
     *Creates an instance of AppDBConnectionManager.
     * @memberof AppDBConnectionManager
     */
    private constructor() {
        this.modelLoader = ModelLoader.getInstance();
    }

    /**
     * The static method that controls the access to the singleton instance.
     */
    public static getInstance(): AppDBConnectionManager {
        if (!AppDBConnectionManager.instance) {
            AppDBConnectionManager.instance = new AppDBConnectionManager();
        }
        return AppDBConnectionManager.instance;
    }

    /**
     * @memberof AppDBConnectionManager
     */
    public async initializeConnection (databaseConfig: DatabaseConfig): Promise<void> {
        this.databaseConfig = databaseConfig;
        try {
            // this.dbClient = new Sequelize(this.databaseConfig.DATABASE, this.databaseConfig.USER, this.databaseConfig.PASSWORD, {
            //     host: this.databaseConfig.HOST,
            //     dialect: 'mysql',
            //     define: {
            //         timestamps: false,
            //         freezeTableName: true
            //     },
            // });

          await mongoose.connect("mongodb://127.0.0.1:27017/Reader_Author_db", {


               
             });


            // await  mongoose.connect(
            //    "mongodb://127.0.0.1:27017/Reader_Author_db",
            //     {
            //       useNewUrlParser: true,
            //       useUnifiedTopology: true,
            //       useCreateIndex: true,
            //     },
            //     () => {
            //       console.log("mongdb is connected");
            //     }
            //   );

            // mongoose.set('debug', true);


            // const uri = 'mongodb://localhost:27017/Reader_Author_db';

//   const client = new MongoClient(uri, {
//     serverSelectionTimeoutMS: 60000, // Adjust the timeout as needed
// });

// (async () => {
//     try {  let connected =  await client.connect();
//         // Connect to MongoDB
//        let connected =  await client.connect();
//         console.log('Connected successfully to MongoDB', connected);

//         const User = mongoose.model('User', userSchema);

//         const newUser = await User.create({
//             id: 1,
//             name: 'John Doe',
//             address: '123 Main St, Anytown, USA',
//             authPerson: 'Jane Smith',
//             authContact: '555-1234',
//             createdAt: new Date(),
//             updatedAt: new Date(),
//         });

//         console.log('User successfully created:', newUser);
//         // Perform operations with client here...

//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     } finally {
//         // Close the connection
//         await client.close();
//     }
// })();

            // await this.checkAttemptsCompletionError();
            this.modelLoader.initializeModels();
            this.modelLoader.associateModels();
            
        } catch (error) {
            logger.error(`${AppServerConstant.ERROR_MESSAGES.ERROR_DB_CONNECTION} - %o`, error);
            throw new Error(`${AppServerConstant.ERROR_MESSAGES.ERROR_DB_CONNECTION} - ${error.message}`);
        }
    }

    public async closeConnection(): Promise<void> {
        return this.dbClient.close();
    }

    /**
     * @private
     * @memberof BuzzDBConnectionManager
     */
    // private readonly checkConnection = (delayTime: number): Promise<boolean> => {
    //     return new Promise<boolean>((resolve) => {
    //         setTimeout(() => {
    //             this.dbClient
    //                 .authenticate()
    //                 .then(() => {
    //                     logger.info(AppServerConstant.SUCCESS_MESSAGES.SUCCESS_CONNECTION_TEXT);
    //                     resolve(true);
    //                 })
    //                 .catch(err => {
    //                     logger.error('Error: %s', err.message);
    //                     resolve(false);
    //                 });
    //         }, delayTime);
    //     });
    // }

    /**
     * @private
     * @returns {Promise<void>}
     * @memberof BuzzDBConnectionManager
     */
    // private async checkAttemptsCompletionError(): Promise<void> {
    //     let attempts = 1;
    //     let success: boolean = await this.checkConnection(0);
    //     while (success !== true && attempts < this.databaseConfig.RETRY_ATTEMPTS) {
    //         attempts++;
    //         success = await this.checkConnection(this.databaseConfig.RETRY_TIME);
    //         logger.info('attempt number %s', attempts);
    //     }
    //     if (!success) {
    //         throw new Error(AppServerConstant.ERROR_MESSAGES.ERROR_DB_CONNECTION)
    //     }
    // }
}
