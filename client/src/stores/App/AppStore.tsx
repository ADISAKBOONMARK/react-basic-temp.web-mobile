import { createSlice } from '@reduxjs/toolkit';
import avatar from '../../assets/images/avatar.jpg';

import MenuStore from './MenuStore';

const myState = {
    page: {
        name: MenuStore.staticMenu()[0].name,
    },
    menu: MenuStore.staticMenu(),
    user: {
        name: 'Adisak Boonmark',
        pwd: 'pwd',
        email: 'adisak0661013@gmail.com',
        avatar: avatar,
    },
};

const myStore = createSlice({
    name: 'AppStore',
    initialState: myState,
    reducers: {
        setPage: (state: any, action: any) => {
            state.page.name = action.payload;
        },
    },
});

const AppReducer = myStore.reducer;
const AppAction = myStore.actions;

export { AppReducer, AppAction };
