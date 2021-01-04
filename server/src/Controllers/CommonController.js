import { APP, ROOT_URL } from '../MainProperty';

import ResultDataProperty from '../BusinessData/Result/ResultData/ResultDataProperty';

import ResponseProperty from '../BusinessData/Response/ResponseProperty';

import Model from '../Models/CommonModel';

class CommonController {
    async setController() {
        APP.get(ROOT_URL + '/*', async function (req, res) {
            try {
                const log = res.log;
                const param = req.query;
                const model = new Model();
                const resultData = await model.get(log, param);
                const response = new ResponseProperty();
                response.submit(res, resultData);
            } catch (err) {
                const resultData = new ResultDataProperty();
                await resultData.systemError({ developerMoreInfo: err.message });
                const response = new ResponseProperty();
                response.submit(res, resultData, err);
            }
        });

        APP.post(ROOT_URL + '/*', async function (req, res) {
            try {
                const log = res.log;
                const param = req.body;
                const model = new Model();
                const resultData = await model.post(log, param);
                const response = new ResponseProperty();
                response.submit(res, resultData);
            } catch (err) {
                const resultData = new ResultDataProperty();
                await resultData.systemError({ developerMoreInfo: err.message });
                const response = new ResponseProperty();
                response.submit(res, resultData, err);
            }
        });
    }
}

export default CommonController;
