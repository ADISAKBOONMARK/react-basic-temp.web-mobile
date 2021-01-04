import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import CardWorkCustom from '../CardWorkCustom';

interface IActivitie {
    project: string;
    myWork: string;
    technology: string;
    description: string;
}

interface IItem {
    time: string;
    organization: string;
    role: string;
    activities: Array<IActivitie>;
}

interface IProps {
    items: Array<IItem>;
}

const TimelineWorkCustom = (props: IProps) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        div: {
            'margin-left': '-100%',
        },
    }));

    const classes = useStyles();

    const renderItem = (data: IItem) => {
        return (
            <div className={classes.div}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <CardWorkCustom
                            time={data.time}
                            organization={data.organization}
                            role={data.role}
                            activities={data.activities}
                        ></CardWorkCustom>
                    </TimelineContent>
                </TimelineItem>
            </div>
        );
    };
    return (
        <div className={classes.root}>
            {props.items.map((data: IItem, index: any) => renderItem(data))}
        </div>
    );
};

export default TimelineWorkCustom;
