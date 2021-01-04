import clsx from 'clsx';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import { AppAction } from '../stores/App/AppStore';

import MenuLayout from './MenuLayout';

const AppLayout = (props: any) => {
    const drawerWidth = 300;

    const styles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                flexGrow: 1,
            },
            title: {
                flexGrow: 1,
                marginLeft: theme.spacing(3),
            },
            appBar: {
                zIndex: theme.zIndex.drawer + 1,
            },
            drawer: {
                width: drawerWidth,
                flexShrink: 0,
                whiteSpace: 'nowrap',
            },
            drawerOpen: {
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
            drawerClose: {
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: 'hidden',
                width: theme.spacing(7) + 1,
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9) + 1,
                },
            },
            content: {
                flexGrow: 1,
                padding: '4%',
            },
        }),
    );

    const classes = styles();

    const [openDrawer, setOpenDrawer] = React.useState(true);

    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const [anchorElUserMenu, setAnchorElUserMenu] = React.useState<null | HTMLElement>(null);

    const handleUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElUserMenu(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUserMenu(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} variant={'outlined'}>
                <Toolbar variant={'dense'}>
                    <IconButton color="secondary" onClick={handleDrawer} edge="start">
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        component="span"
                        variant="h6"
                        noWrap
                        color="textSecondary"
                        className={classes.title}
                    >
                        Sample Scan QRcode
                    </Typography>

                    <IconButton color="secondary" onClick={handleUserMenu} edge="end">
                        <Avatar src={props.user.avatar}></Avatar>
                    </IconButton>

                    <Menu
                        anchorEl={anchorElUserMenu}
                        keepMounted
                        open={Boolean(anchorElUserMenu)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem>
                            <Avatar src={props.user.avatar}></Avatar>&nbsp;&nbsp;
                            {props.user.email}
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {isMobile ? (
                <SwipeableDrawer
                    anchor={'left'}
                    open={!openDrawer}
                    onClose={handleDrawer}
                    onOpen={handleDrawer}
                >
                    <div className={classes.drawer}>
                        <MenuLayout
                            handleDrawer={handleDrawer}
                            isOpenDrawer={openDrawer}
                            isMobile
                        />
                    </div>
                </SwipeableDrawer>
            ) : (
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: openDrawer,
                        [classes.drawerClose]: !openDrawer,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: openDrawer,
                            [classes.drawerClose]: !openDrawer,
                        }),
                    }}
                >
                    <Toolbar />
                    <MenuLayout
                        handleDrawer={handleDrawer}
                        isOpenDrawer={openDrawer}
                        isMobile={false}
                    />
                </Drawer>
            )}

            <main style={{ width: '-webkit-fill-available', flexGrow: 1 }}>
                <Toolbar />
                <div className={classes.content}>{props.children}</div>
            </main>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return { ...state.AppReducer };
};

export default connect(mapStateToProps, AppAction)(AppLayout);
