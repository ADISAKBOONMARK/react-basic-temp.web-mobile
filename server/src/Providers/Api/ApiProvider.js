import axios from 'axios';
import OutputOnApiProperty from '../../BusinessData/Result/OutputOnApi/OutputOnApiProperty';

class ApiProvider {
    async get(log, { nodeName, headers, baseUrl, cmd, params }) {
        const option = {
            method: 'GET',
            headers: headers,
            url: baseUrl + cmd + '?' + new URLSearchParams(params).toString(),
        };

        log.stat('request', 'success', 'GET', nodeName, cmd);

        const response = await axios(option)
            .then(function (response) {
                return response;
            })
            .catch(function (err) {
                if (err.response === undefined) {
                    const response = new OutputOnApiProperty();
                    response.developerMessage = err.message;
                    response.developerMoreInfo = err.stack;

                    return { status: 500, data: response };
                } else {
                    return err.response;
                }
            });

        log.stat('received_response', 'success', 'GET', nodeName, cmd);

        return response;
    }

    async post(log, { nodeName, headers, baseUrl, cmd, body }) {
        const option = {
            method: 'POST',
            headers: headers,
            url: baseUrl + cmd,
            data: body,
        };

        log.stat('request', 'success', 'POST', nodeName, cmd);

        const response = await axios(option)
            .then(function (response) {
                return response;
            })
            .catch(function (err) {
                if (err.response === undefined) {
                    const response = new OutputOnApiProperty();
                    response.developerMessage = err.message;
                    response.developerMoreInfo = err.stack;

                    return { status: 500, data: response };
                } else {
                    return err.response;
                }
            });

        log.stat('received_response', 'success', 'POST', nodeName, cmd);

        return response;
    }
}

export default ApiProvider;
