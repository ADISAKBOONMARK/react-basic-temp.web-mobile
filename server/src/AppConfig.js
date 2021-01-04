import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../.env') });

const APP_CONFIG = {
    NODE_NAME: process.env.NODE_NAME || 'node-name',
    NODE_DESCRIPTION: process.env.NODE_DESCRIPTION || 'node description',
    NODE_VERSION: process.env.NODE_VERSION || '1.0.0',
    MODE: (process.env.MODE || 'dev').toLowerCase(),
    LOG: {
        WRITE_FILE: JSON.parse(process.env.LOG_WRITE_FILE || true),
        WRITE_CONSOLE: JSON.parse(process.env.LOG_WRITE_CONSOLE || true),
        MODE: (process.env.LOG_MODE || 'info').toLowerCase(),
    },
    APP_VERSION: process.env.APP_VERSION || '/v1.0.0',
    APP_NAME: process.env.APP_NAME || '/node-name',
    HOST: process.env.HOST || '0.0.0.0',
    DOMAIN: process.env.DOMAIN || 'localhost',
    ENABLE_SSL: JSON.parse(process.env.ENABLE_SSL || false),
    PORT_HTTPS: process.env.PORT_HTTPS || '8043',
    PORT_HTTP: process.env.PORT_HTTP || '8000',

    APP_CERT: process.env.APP_CERT || './cert.pem',
    APP_CHAIN: process.env.APP_CHAIN || './chain.pem',
    APP_FULLCHAIN: process.env.APP_FULLCHAIN || './fullchain.pem',
    APP_PRIVKEY: process.env.APP_PRIVKEY || './privkey.pem',
    SERVICES: {
        MY_PROFILE_BE_WEB_API: {
            NODE_NAME: process.env.SERVICE_MY_PROFILE_BE_WEB_API_NODE_NAME || 'service-node-name',
            NODE_DESCRIPTION:
                process.env.SERVICE_MY_PROFILE_BE_WEB_API_NODE_DESCRIPTION || 'service node name description',
            BASE_URL: process.env.SERVICE_MY_PROFILE_BE_WEB_API_BASE_URL || 'http://localhost:9000',
        },
    },
};

export { APP_CONFIG };
