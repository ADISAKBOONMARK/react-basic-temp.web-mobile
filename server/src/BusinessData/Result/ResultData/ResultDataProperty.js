class ResultDataProperty {
    constructor() {
        this.status = null;
        this.code = null;
        this.data = null;

        this.userMessage = null;
        this.userMoreInfo = null;

        this.developerMessage = null;
        this.developerMoreInfo = null;
    }

    async set(outputOnApi) {
        const code = outputOnApi.code;

        switch (code) {
            case 200:
                await this.success(outputOnApi);
                break;
            case 202:
                await this.accepted(outputOnApi);
                break;
            case 400:
                await this.badRequest(outputOnApi);
                break;
            case 401:
                await this.unauthorized(outputOnApi);
                break;
            case 404:
                await this.dataNotFound(outputOnApi);
                break;
            case 409:
                await this.dataExist(outputOnApi);
                break;
            case 500:
                await this.systemError(outputOnApi);
                break;
        }
    }

    async success({ data, developerMessage, developerMoreInfo, userMessage, userMoreInfo }) {
        this.status = true;
        this.code = 200;
        await this.mapResult(data, developerMessage, developerMoreInfo, userMessage, userMoreInfo);
    }

    async accepted({ data, developerMessage, developerMoreInfo, userMessage, userMoreInfo }) {
        this.status = true;
        this.code = 202;
        await this.mapResult(data, developerMessage, developerMoreInfo, userMessage, userMoreInfo);
    }

    async badRequest({ data, developerMessage, developerMoreInfo, userMessage, userMoreInfo }) {
        this.status = false;
        this.code = 400;
        await this.mapResult(data, developerMessage, developerMoreInfo, userMessage, userMoreInfo);
    }

    async unauthorized({ data, developerMessage, developerMoreInfo, userMessage, userMoreInfo }) {
        this.status = false;
        this.code = 401;
        await this.mapResult(data, developerMessage, developerMoreInfo, userMessage, userMoreInfo);
    }

    async dataNotFound({ data, developerMessage, developerMoreInfo, userMessage, userMoreInfo }) {
        this.status = false;
        this.code = 404;
        await this.mapResult(data, developerMessage, developerMoreInfo, userMessage, userMoreInfo);
    }

    async dataExist({ data, developerMessage, developerMoreInfo, userMessage, userMoreInfo }) {
        this.status = false;
        this.code = 409;
        await this.mapResult(data, developerMessage, developerMoreInfo, userMessage, userMoreInfo);
    }

    async systemError({ data, developerMessage, developerMoreInfo, userMessage, userMoreInfo }) {
        this.status = false;
        this.code = 500;
        await this.mapResult(data, developerMessage, developerMoreInfo, userMessage, userMoreInfo);
    }

    async mapResult(data, developerMessage, developerMoreInfo, userMessage, userMoreInfo) {
        this.data = data || {};
        this.userMessage = userMessage || (await this.setUserMessage(this.code));
        this.userMoreInfo = userMoreInfo || '';
        this.developerMessage = developerMessage || (await this.setDeveloperMessage(this.code));
        this.developerMoreInfo = developerMoreInfo || this.userMoreInfo;
    }

    async setUserMessage(code) {
        let userMessage = '';

        switch (code) {
            case 200:
                userMessage = 'The request has succeeded';
                break;
            case 202:
                userMessage = 'The request has been received';
                break;
            case 400:
                userMessage = 'The server could not understand the request';
                break;
            case 401:
                userMessage = 'Unauthorized';
                break;
            case 404:
                userMessage = 'Data not found';
                break;
            case 409:
                userMessage = 'Data exist';
                break;
            case 500:
                userMessage = 'The server encountered an unexpected condition';
                break;
        }

        return userMessage;
    }

    async setDeveloperMessage(code) {
        let developerMessage = '';

        switch (code) {
            case 200:
                developerMessage = 'OK';
                break;
            case 202:
                developerMessage = 'Accepted';
                break;
            case 400:
                developerMessage = 'Bad Request';
                break;
            case 401:
                developerMessage = 'Unauthorized';
                break;
            case 404:
                developerMessage = 'Data not found';
                break;
            case 409:
                developerMessage = 'Data exist';
                break;
            case 500:
                developerMessage = 'System Error';
                break;
        }

        return developerMessage;
    }

    async getResponseCode() {
        const code = this.code || 200;

        return code;
    }
}

export default ResultDataProperty;
