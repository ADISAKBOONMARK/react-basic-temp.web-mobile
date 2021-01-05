import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { AppReducer } from '../global/AppStore';

import { ScanQRcodeReducer } from './ScanQRcode/ScanQRcodeStore';

const store = configureStore({
    reducer: combineReducers({
        AppReducer,
        ScanQRcodeReducer,
    }),
});

export default store;
