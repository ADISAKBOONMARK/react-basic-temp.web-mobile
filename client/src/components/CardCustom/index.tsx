import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Icons from '../Icons';

interface IItem {
    icon?: string;
    text: string;
    value: string;
}

interface IProps {
    title: string;
    items: Array<IItem>;
}

const CardCustom = (props: IProps) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        tltle: {
            textAlign: 'left',
        },
        text: {
            textAlign: 'left',
        },
        value: {
            textAlign: 'right',
        },
        div: {
            width: '100%',
        },
        icon: {
            'vertical-align': 'middle',
        },
    }));

    const classes = useStyles();

    const renderItem = (data: IItem) => {
        return (
            <div className={classes.div}>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.text}>
                            <Typography>
                                {data.icon ? (
                                    <Icons
                                        className={classes.icon}
                                        name={data.icon || ''}
                                        width={30}
                                        height={30}
                                    />
                                ) : (
                                    ''
                                )}

                                {data.value ? <b>{' ' + data.text + ' : '}</b> : ' ' + data.text}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.value}>
                            <Typography>{data.value}</Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    };
    return (
        <div className={classes.root}>
            <Card>
                <CardContent>
                    <Grid>
                        <div className={classes.tltle}>
                            <Typography>
                                <b>{props.title}</b>
                            </Typography>
                        </div>
                        <br />
                        <Divider />
                    </Grid>

                    {props.items.map((data: IItem, index: any) => renderItem(data))}
                </CardContent>
            </Card>
        </div>
    );
};

export default CardCustom;
