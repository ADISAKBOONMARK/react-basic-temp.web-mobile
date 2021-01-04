import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ScanQRcodeAction } from '../../stores/ScanQRcode/ScanQRcodeStore';

import QrReader from 'react-qr-reader';

const ScanQRcodeView = (props: any) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        camera: {
            display: 'block',
            'margin-left': 'auto',
            'margin-right': 'auto',
            padding: '1px',
            width: '100%',
            height: '100%',
            'max-width': '800px',
            'max-height': '600px',
        },
    }));

    const classes = useStyles();

    const [resultScan, setResultScan] = React.useState('No result');

    const handleScan = (data: any) => {
        if (data) {
            setResultScan(data);
        }
    };

    const handleError = (err: any) => {
        console.error(err);
    };

    return (
        <div className={classes.root}>
            <div className={classes.camera}>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '100%' }}
                />
                <br />
                <Typography>{resultScan}</Typography>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return { ...state.AppReducer, ...state.ScanQRcodeReducer };
};

export default connect(mapStateToProps, ScanQRcodeAction)(ScanQRcodeView);
