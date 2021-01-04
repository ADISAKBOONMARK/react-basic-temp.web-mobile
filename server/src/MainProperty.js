//= ================= [START Import Modules] =================//
import { APP_CONFIG } from './AppConfig';
import path from 'path';
import fs from 'fs';

import express from 'express';
import bodyParser from 'body-parser';
import https from 'https';
import http from 'http';

import moment from 'moment';
import lodash from 'lodash';

import LogProvider from './Providers/Log/LogProvider';
import DaterProvider from './Providers/Dater/DaterProvider';
import MasterGenProvider from './Providers/MasterGen/MasterGenProvider';
import RandomsProvider from './Providers/Randoms/RandomsProvider';

import ApiProvider from './Providers/Api/ApiProvider';
//= ================= [END Import Modules] =================//

//= ================= [ START Require Property ] ==========//
const ROOT_PATH = __dirname;
const PATH = path;
const FS = fs;

const EXPRESS = express;
const APP = EXPRESS();
//= ================= [ END Require Property ] ============//

//= ================= [START Server Setting ] =================//
APP.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
APP.use(bodyParser.json({ limit: '50mb' }));

const ROOT_URL = APP_CONFIG.APP_NAME + APP_CONFIG.APP_VERSION;

const API_PATH = (function () {
    if (APP_CONFIG.ENABLE_SSL === true) {
        const endpoint = APP_CONFIG.DOMAIN + ':' + APP_CONFIG.PORT_HTTPS;
        return 'https://' + endpoint + ROOT_URL;
    } else {
        const endpoint = APP_CONFIG.DOMAIN + ':' + APP_CONFIG.PORT_HTTP;
        return 'http://' + endpoint + ROOT_URL;
    }
})();

const SERVER = (function () {
    if (APP_CONFIG.ENABLE_SSL === true) {
        return https.createServer(
            {
                key: FS.readFileSync(path.join(ROOT_PATH, APP_CONFIG.APP_PRIVKEY), 'utf8'),
                cert: FS.readFileSync(path.join(ROOT_PATH, APP_CONFIG.APP_CERT), 'utf8'),
                ca: FS.readFileSync(path.join(ROOT_PATH, APP_CONFIG.APP_CHAIN), 'utf8'),
            },
            APP,
        );
    } else {
        return http.createServer(APP);
    }
})();

//= ================= [END Server Setting ] ==================//

//= ================= [ START Node Modules Option ] ===========//
const MOMENT = moment;
const LODASH = lodash;
//= ================= [ END Node Modules Option ] =============//

//= ================= [ START Provider ] =====================//
const LOG = new LogProvider();
const DATER = new DaterProvider();
const MASTER_GEN = new MasterGenProvider();
const RANDOMS = new RandomsProvider();
const API = new ApiProvider();
//= ================= [ END Provider ] =======================//

export {
    ROOT_PATH,
    PATH,
    FS,
    EXPRESS,
    APP,
    APP_CONFIG,
    ROOT_URL,
    API_PATH,
    SERVER,
    MOMENT,
    LODASH,
    LOG,
    DATER,
    MASTER_GEN,
    RANDOMS,
    API,
};
