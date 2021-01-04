import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { AppAction } from '../stores/App/AppStore';

const LoginLayout = () => {
    return (
        <div>
            <Typography>Login</Typography>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return { ...state.AppReducer };
};

export default connect(mapStateToProps, AppAction)(LoginLayout);
