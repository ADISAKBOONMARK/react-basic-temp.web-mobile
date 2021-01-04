import { APP_CONFIG } from '../../AppConfig';
import commonlogkb from 'commonlog-kb';

const logsConfig = {
    projectName: APP_CONFIG.NODE_NAME, // App Name

    // Enable appLog
    log: {
        path: './logs/appLog/',
        // format : 'json',//"pipe",
        format: 'pipe',
        level: 'debug',
        console: APP_CONFIG.LOG.WRITE_CONSOLE,
        file: APP_CONFIG.LOG.WRITE_FILE,
        time: 60,
        size: null,
    },

    // Enable summaryLog
    summary: {
        path: './logs/summary/',
        // format : 'json',//"pipe",
        format: 'pipe',
        console: !!(APP_CONFIG.LOG.MODE === 'debug' && APP_CONFIG.LOG.WRITE_CONSOLE),
        file: APP_CONFIG.LOG.WRITE_FILE,
        time: 60,
        size: null,
    },

    // Enable detail
    detail: {
        path: './logs/detail/',
        // format : 'json',//"pipe",
        // format : 'pipe',
        console: !!(APP_CONFIG.LOG.MODE === 'debug' && APP_CONFIG.LOG.WRITE_CONSOLE),
        file: APP_CONFIG.LOG.WRITE_FILE,
        time: 60,
        size: null,
        raw_data: true,
    },

    // Enable stat
    stat: {
        path: './logs/stat/',
        // format : 'json',//"pipe",
        format: 'pipe',
        console: !!(APP_CONFIG.LOG.MODE === 'debug' && APP_CONFIG.LOG.WRITE_CONSOLE),
        file: APP_CONFIG.LOG.WRITE_FILE,
        path_db: undefined,
        time: 60,
        statInterval: 1,
        mode: 0,
        flush: true,
    },
};

const LOG_KB = commonlogkb.init(logsConfig);

export { LOG_KB };
