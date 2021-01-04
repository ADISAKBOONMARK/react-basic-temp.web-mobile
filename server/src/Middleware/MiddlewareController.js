import { APP, ROOT_URL, MASTER_GEN, LODASH } from '../MainProperty';

import LogProvider from '../Providers/Log/LogProvider';

class MiddlewareController {
    async setController() {
        APP.use(ROOT_URL, async function (req, res, next) {
            // NOTICE: You might want to change these.
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Content-Type', 'application/json');

            //= ================= [ START Create Session ] ==================//
            res.xSessionId = req.headers['x-session-id'] || (await MASTER_GEN.genXsession());
            res.xRtid = req.headers['x-rtid'] || (await MASTER_GEN.genTid());
            // NOTICE: Use for black-end => res.xTid = req.headers['x-tid'] || await MASTER_GEN.genTid();
            res.xTid = await MASTER_GEN.genTid();

            const session = res.xSessionId + ':' + res.xRtid + ':' + res.xTid;
            const invoke = res.xRtid;
            const identity = res.xTid;
            const method = req.method;
            const cmd = req.path;

            const log = new LogProvider(session, invoke, method, cmd, identity);
            log.summary = await log.summary();
            log.detail = await log.detail();

            log.info('Start Proccess', method, req.originalUrl, '...');
            log.info('Session', session);

            res.log = log;

            let reqParams;
            if (!LODASH.isEmpty(req.query)) {
                reqParams = req.query;
            } else {
                if (!LODASH.isEmpty(req.body)) {
                    reqParams = req.body;
                } else {
                    reqParams = 'have no data';
                }
            }

            log.debug('Req params', reqParams);
            log.stat('received_request', 'success', log.node, log.method, log.cmd);
            log.detail.addInputRequest(log.node, log.cmd, log.invoke, '', reqParams);
            //= ================= [ END Create Session ] ====================//

            next();
        });
    }
}

export default MiddlewareController;
