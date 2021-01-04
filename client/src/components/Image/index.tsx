import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {
    src: string;
    width?: number;
    height?: number;
    className?: any;
    alt?: string;
}

const Image = (props: IProps) => {
    const useStyles = makeStyles((theme) => ({
        default: {},
    }));

    const classes = useStyles();

    return (
        <img
            className={props.className || classes.default}
            src={props.src}
            width={props.width || '50'}
            height={props.height || '50'}
            alt={props.alt || 'nice'}
        />
    );
};

export default Image;
