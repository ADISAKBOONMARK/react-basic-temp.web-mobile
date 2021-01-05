import axios, { AxiosPromise } from 'axios';
import APP_CONFIG from '../../AppConfig';
import store from '../../stores';
import { AppAction, AppReducer } from '../../global/AppStore';

const baseUrl = APP_CONFIG.SERVER_SIDE;

// TODO: custom headers template for JWT
const headers = {
    'Content-Type': 'application/json',
    Authorization: 'JWT fefege...',
};

const get = (cmd: string, params?: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            // store.dispatch(AppAction.setLoading(true));
            const response = await axios
                .create({
                    baseURL: baseUrl,
                    timeout: 2000,
                    headers: headers,
                })
                .get(cmd, { params: params });
            // cmd + '?' + new URLSearchParams(params).toString(),

            resolve(response.data);
        } catch (err) {
            // store.dispatch(AppAction.setError({ subject, message }));

            console.error('API error: ', cmd, err.response);

            reject(err);
        } finally {
            // store.dispatch(AppAction.setLoading(false));
        }
    });
};

const post = (cmd: string, params?: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            // store.dispatch(AppAction.setLoading(true));
            const response = await axios
                .create({
                    baseURL: baseUrl,
                    timeout: 2000,
                    headers: headers,
                })
                .post(cmd, params);
            // cmd + '?' + new URLSearchParams(params).toString(),

            resolve(response.data);
        } catch (err) {
            // store.dispatch(AppAction.setError({ subject, message }));

            console.error('API error: ', cmd, err.response);

            reject(err);
        } finally {
            // store.dispatch(AppAction.setLoading(false));
        }
    });
};

export default { get, post };
