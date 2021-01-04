import CommonApi from '../Api/CommonApi';

class CommonService {
    async get(log, param) {
        const api = new CommonApi();

        const requestOption = {
            cmd: log.cmd,
            data: param,
        };

        return await api.get(log, requestOption);
    }

    async post(log, param) {
        const api = new CommonApi();

        const requestOption = {
            cmd: log.cmd,
            data: param,
        };

        return await api.post(log, requestOption);
    }
}

export default CommonService;
