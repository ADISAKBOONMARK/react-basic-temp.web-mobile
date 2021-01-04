import { createSlice } from '@reduxjs/toolkit';

const myState = {
    name: 'ScanQRcodeState',
};

const myStore = createSlice({
    name: 'ScanQRcodeStore',
    initialState: myState,
    reducers: {},
});

const ScanQRcodeReducer = myStore.reducer;
const ScanQRcodeAction = myStore.actions;

export { ScanQRcodeReducer, ScanQRcodeAction };
