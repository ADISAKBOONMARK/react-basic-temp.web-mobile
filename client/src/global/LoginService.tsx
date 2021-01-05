import ApiProvider from '../provider/Api/ApiProvider';

interface ILogin {
    user: string;
    password: string;
    group: string;
}

const normal = (params: ILogin): any => {
    return ApiProvider.post('/login/normal', params);
};

export default {
    normal,
};
