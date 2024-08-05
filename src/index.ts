/** main index file for starting the server */
import * as http from 'http';
import * as https from 'https';
import * as fs from 'fs';

import { AppServerConstant } from './constants/constant';
import { logger } from './utils/logger';
import { Server } from './server';

const ENVConfig = require( `./config/${ process.env.NODE_ENV }.json` );

const expServerObj = new Server( ENVConfig );
expServerObj.connectToServerResources();
expServerObj.app.set( AppServerConstant.PORT, ENVConfig.PORT || ENVConfig.DEFAULT_PORT );

// const options = {
//     key: fs.readFileSync('/root/lighthouseweb/ceritificates/apanainvoice.com.key'),
//     cert: fs.readFileSync('/root/lighthouseweb/ceritificates/1bb24b621d85aaa.crt','utf8'),
//     ca: fs.readFileSync('/root/lighthouseweb/ceritificates/gd_bundle-g2-g1.crt','utf8'),
// };


const server = http.createServer( expServerObj.app );
// const server = https.createServer(options, expServerObj.app);


server.listen(process.env.PORT || expServerObj.app.get(AppServerConstant.PORT));
server.on(AppServerConstant.ERROR_MESSAGES.ERROR_TEXT, onError);
server.on(AppServerConstant.LISTENING_TEXT, onListening);

function onError(error: NodeJS.ErrnoException): void {
    logger.error(error);
}

function onListening(): void {

    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;

    logger.info(`
    ################################################
    ###     Server listening on port: ${bind}    ###
    ################################################
    `);
}