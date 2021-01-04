import ResultDataProperty from '../BusinessData/Result/ResultData/ResultDataProperty';

import Service from '../Services/CommonService';

class CommonModel {
    async get(log, param) {
        const resultData = new ResultDataProperty();
        const service = new Service();
        const result = await service.get(log, param);
        await resultData.set(result);
        return resultData;
    }

    async post(log, param) {
        const resultData = new ResultDataProperty();
        const service = new Service();
        const result = await service.post(log, param);
        await resultData.set(result);
        return resultData;
    }
}

export default CommonModel;
