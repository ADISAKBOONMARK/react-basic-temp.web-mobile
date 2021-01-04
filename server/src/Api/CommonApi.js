import { APP_CONFIG } from '../../AppConfig';
import { API } from '../../MainProperty';
import OutputOnApiProperty from '../../BusinessData/Result/OutputOnApi/OutputOnApiProperty';

class BaasWebApi {
    constructor() {
        this.nodeName = APP_CONFIG.SERVICES.BAAS_WEB_API.NODE_NAME;
        this.nodeDescription = APP_CONFIG.SERVICES.BAAS_WEB_API.NODE_DESCRIPTION;
        this.baseUrl = APP_CONFIG.SERVICES.BAAS_WEB_API.BASE_URL;
        this.headers = {
            'content-type': 'application/json',
            accept: 'application/json',
        };
    }

    async get(log, requestOption) {
        requestOption.nodeName = this.nodeName;
        requestOption.nodeDescription = this.nodeDescription;
        requestOption.baseUrl = this.baseUrl;
        requestOption.headers = Object.assign(this.headers, requestOption.headers);

        log.detail.addOutputRequest(requestOption.nodeName, requestOption.cmd, log.identity, '', requestOption.data);

        const response = await API.get(log, requestOption);

        log.detail.addInputResponse(requestOption.nodeName, requestOption.cmd, log.identity, '', response.data);

        return await this.mapResponse(log, requestOption, response);
    }

    async post(log, requestOption) {
        requestOption.nodeName = this.nodeName;
        requestOption.nodeDescription = this.nodeDescription;
        requestOption.baseUrl = this.baseUrl;
        requestOption.headers = Object.assign(this.headers, requestOption.headers);

        log.detail.addOutputRequest(requestOption.nodeName, requestOption.cmd, log.Identity, '', requestOption.data);

        let response = {};

        response = await API.post(log, requestOption);

        log.detail.addInputResponse(requestOption.nodeName, requestOption.cmd, log.Identity, '', response.data);

        return await this.mapResponse(log, requestOption, response);
    }

    async mapResponse(log, requestOption, response) {
        const outputOnApi = new OutputOnApiProperty();

        if (response.status === 200 || response.status === 202) {
            outputOnApi.status = true;
            outputOnApi.code = await this.mapResponseCode(response.data.code, response.status);
            outputOnApi.data = response.data.data;
            outputOnApi.userMessage = response.data.userMessage;
            outputOnApi.userMoreInfo = response.data.userMoreInfo;
            outputOnApi.developerMessage = response.data.developerMessage;
            outputOnApi.developerMoreInfo = response.data.developerMoreInfo;
            log.summary.addSuccessBlock(
                requestOption.nodeName,
                requestOption.cmd,
                outputOnApi.code,
                outputOnApi.developerMessage,
            );
        } else {
            outputOnApi.status = false;
            outputOnApi.code = await this.mapResponseCode(response.data.code, response.status);
            outputOnApi.data = response.data.data;
            outputOnApi.userMessage = response.data.userMessage;
            outputOnApi.userMoreInfo = response.data.userMoreInfo;
            outputOnApi.developerMessage = response.data.developerMessage;
            outputOnApi.developerMoreInfo = response.data.developerMoreInfo;
            log.summary.addErrorBlock(
                requestOption.nodeName,
                requestOption.cmd,
                outputOnApi.code,
                outputOnApi.developerMessage,
            );
        }

        return outputOnApi;
    }

    async mapResponseCode(code, status) {
        let result;

        if (code !== undefined) {
            result = code;
        } else {
            result = status;
        }

        return result;
    }
}

export default BaasWebApi;
