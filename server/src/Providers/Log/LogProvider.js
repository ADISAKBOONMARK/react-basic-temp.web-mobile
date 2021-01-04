import { APP_CONFIG } from '../../AppConfig';
import { LOG_KB } from './MasterLogProvider';
class LogProvider {
    constructor(session, invoke, method, cmd, identity) {
        this.session = session || '::';
        this.node = APP_CONFIG.NODE_NAME;
        this.method = method || '';
        this.cmd = cmd || '';
        this.invoke = invoke || '';
        this.identity = identity || '';
    }

    async info(...msg) {
        if (APP_CONFIG.LOG.MODE === 'info') {
            await LOG_KB.info(this.session, ...msg);
        } else if (APP_CONFIG.LOG.MODE === 'debug') {
            await LOG_KB.debug(this.session, ...msg);
        }
    }

    async debug(...msg) {
        if (APP_CONFIG.LOG.MODE === 'debug') {
            await LOG_KB.debug(this.session, ...msg);
        }
    }

    async error(...msg) {
        await LOG_KB.error(this.session, ...msg);
    }

    async warn(...msg) {
        await LOG_KB.warn(this.session, ...msg);
    }

    async stat(processType, processStatus, node, method, cmd) {
        await LOG_KB.stat(processType + ' ' + processStatus + ' ' + node + ' ' + method + ' ' + cmd);
    }

    async summary() {
        const summaryLog = await LOG_KB.summary(this.session, this.invoke, this.cmd, this.identity);

        return summaryLog;
    }

    async detail() {
        const detailLog = await LOG_KB.detail(this.session, this.invoke, this.cmd, this.identity);

        return detailLog;
    }
}

export default LogProvider;
