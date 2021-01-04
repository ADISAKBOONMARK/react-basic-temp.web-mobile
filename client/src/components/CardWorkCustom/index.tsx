import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface IActivitie {
    project: string;
    myWork: string;
    technology: string;
    description: string;
}

interface IProps {
    time: string;
    organization: string;
    role: string;
    activities: Array<IActivitie>;
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
            textAlign: 'left',
        },
        div: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }));

    const classes = useStyles();

    const renderItem = (data: IActivitie) => {
        return (
            <div className={classes.div}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}> 
                            {data.project}
                            {/* <b>
                                {'- ' +
                                    '[' +
                                    data.myWork +
                                    '] ' +
                                    data.project +
                                    ' (' +
                                    data.technology +
                                    ')'}
                            </b> */}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {/* My work : {data.myWork} <br />
                            Technology : {data.technology} <br /> */}
                            {data.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <br />
                {/* <Card>
                    <CardContent>
                        <Grid>
                            <div className={classes.text}>
                                <Typography>
                                    <b>
                                        {'- ' +
                                            '[' +
                                            data.myWork +
                                            '] ' +
                                            data.project +
                                            ' (' +
                                            data.technology +
                                            ')'}
                                    </b>
                                    <br />
                                    
                                </Typography>
                                <br />
                                <Divider />
                                <br />
                                <Typography>
                                    {data.description}
                                </Typography>
                            </div>
                        </Grid>
                    </CardContent>
                </Card>
                <br /> */}
            </div>
        );
    };

    return (
        <div className={classes.root}>
            <Grid>
                <div className={classes.tltle}>
                    <Typography>
                        <b>{props.time}</b>
                    </Typography>
                    <br />
                    <Typography>
                        <b>Organization : </b>
                        {props.organization}
                    </Typography>
                    <br />
                    <Typography>
                        <b>Role : </b>
                        {props.role}
                    </Typography>
                    <br />
                </div>
            </Grid>
            {/* <Card> */}
                {/* <CardContent> */}
                    {/* <Grid> */}
                    {/* <div className={classes.tltle}> */}
                    {/* <br /> */}
                    {/* <Typography>
                        <b>Activities</b>
                    </Typography>
                    <br /> */}
                    {/* <Divider /> */}
                    {/* </div> */}
                    {/* </Grid> */}
                    {props.activities.map((data: IActivitie, index: any) => renderItem(data))}
                {/* </CardContent> */}
            {/* </Card> */}
        </div>
    );
};

export default CardCustom;
