import { createSlice } from '@reduxjs/toolkit';
import jwt from 'jsonwebtoken';
// import avatar from '../../assets/images/avatar.jpg';

import MenuStore from './MenuStore';

// import LoginService from './LoginService';

const myState = {
    page: {
        name: MenuStore.staticMenu()[0].name,
    },
    menu: MenuStore.staticMenu(),
    user: {
        name: 'user name',
        email: 'email',
        group: 'group',
        avatar: 'avatar', // NOTE: used avatar.jpg for test.
    },
    accessTokenStatus: 'expired',
};

const myStore = createSlice({
    name: 'AppStore',
    initialState: myState,
    reducers: {
        login: (state: any, action: any) => {
            console.log(state);
            //NOTE: use for test.
            localStorage.setItem(
                'accessToken',
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MDk4NDg4NTUsImV4cCI6MTU0MTM4NDg1NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.M6Se8bNWtx-B1Xx2tw9hYCbNjNaNaUQ1FNVVjDHWlrk',
            );

            const accessToken = localStorage.getItem('accessToken');

            if (accessToken) {
                const accessTokenData: any = jwt.decode(accessToken);

                console.log('access-token exp time', accessTokenData.exp * 1000);
                console.log('local time', Date.now());

                if (Date.now() >= accessTokenData.exp * 1000) {
                    console.log('access-token is expired');
                    console.log('do login . . .');
                    console.log('successfuly');
                    state.accessTokenStatus = 'active';
                    //TODO: handle login failed
                } else {
                    state.accessTokenStatus = 'active';
                }
                console.log('is access-token', accessTokenData);
            } else {
                state.accessTokenStatus = 'expired';
            }
        },
        setUser: (state: any, action: any) => {
            const user = JSON.parse(action.payload);

            state.user.name = user.name;
            state.user.email = user.email;
            state.user.group = user.group;
            state.user.avatar = user.avatar;
        },
    },
});

const AppReducer = myStore.reducer;
const AppAction = myStore.actions;

export { AppReducer, AppAction };
