// import axios from 'axios';
// import _ from 'lodash';
// import CONFIG from '../config';
// import store from '../stores';
// import { AppAction, AppReducer } from '../stores/App/AppStore';

// todo: custom headers template for JWT
const headers = {
    'Content-Type': 'application/json',
    Authorization: 'JWT fefege...',
};

// const requestHandler = (path: string, param?: any): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             store.dispatch(AppAction.setLoading(true));
//             const result = await axios
//                 .create({
//                     baseURL: CONFIG.BASE_API,
//                     timeout: 2000,
//                     // headers
//                 })
//                 .post(path, param);
//             resolve(result.data.data);
//         } catch (error) {
//             const message = _.get(error, ['response', 'data', 'userMoreInfo'], 'error');
//             const subject = _.get(
//                 error,
//                 ['response', 'data', 'userMessage'],
//                 'something went wrong',
//             );
//             store.dispatch(AppAction.setError({ subject, message }));
//             console.error('API error: ', path, error.response);
//             reject(error);
//         } finally {
//             store.dispatch(AppAction.setLoading(false));
//         }
//     });
// };

export default headers;
