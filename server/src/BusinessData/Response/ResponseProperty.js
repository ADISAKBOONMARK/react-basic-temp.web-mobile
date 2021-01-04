import toSentenceCaseWithdot from 'to-sentence-case-with-dot';

class ResponseProperty {
    async submit(res, result, err) {
        const log = res.log;

        result.userMessage = await toSentenceCaseWithdot(result.userMessage || '');
        result.userMoreInfo = await toSentenceCaseWithdot(result.userMoreInfo || '');

        result.developerMessage = await toSentenceCaseWithdot(result.developerMessage || '');
        result.developerMoreInfo = await toSentenceCaseWithdot(result.developerMoreInfo || '');

        const jsonString = JSON.stringify(result);

        if (result.status === true) {
            log.debug('Res data ' + jsonString);
        } else {
            log.error(err || result.developerMessage);
            log.error('Res data ' + jsonString);
        }

        log.stat('response', 'success', log.node, log.method, log.cmd);

        log.summary.end(result.code, result.developerMessage);

        log.detail.addOutputResponse(log.node, log.cmd, log.invoke, '', result);
        log.detail.end();

        res.log.info('End Proccess');

        res.status(await result.getResponseCode()).end(jsonString);
    }
}

export default ResponseProperty;
