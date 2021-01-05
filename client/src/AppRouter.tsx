import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import customTheme from './theme';
import './style/index.css';

import store from './stores';

import AppLayout from './layout/AppLayout';
import NotFoundLayout from './layout/NotFoundLayout';

import ScanQRcodeView from './views/ScanQRcode/ScanQRcodeView';

const AppRouter = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={customTheme}>
                <CssBaseline />
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <AppLayout>
                    <Switch>
                        <Route exact path="/scan-qrcode" component={ScanQRcodeView} />
                        <Route exact path="/" component={ScanQRcodeView} />
                        <Route path="*" component={NotFoundLayout} />
                    </Switch>
                </AppLayout>
            </ThemeProvider>
        </Provider>
    );
};

export default AppRouter;
