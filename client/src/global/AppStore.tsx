import { createSlice } from '@reduxjs/toolkit';
// import avatar from '../../assets/images/avatar.jpg';

import MenuStore from './MenuStore';

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
};

const myStore = createSlice({
    name: 'AppStore',
    initialState: myState,
    reducers: {
        setPage: (state: any, action: any) => {
            state.page.name = action.payload;
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
