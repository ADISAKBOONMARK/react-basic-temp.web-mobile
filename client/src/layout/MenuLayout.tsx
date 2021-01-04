import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';

import Icons from '../components/Icons';
import { AppAction } from '../stores/App/AppStore';

interface IMenuItem {
    id: string;
    name: string;
    icon: string;
    leaf: boolean;
    path: string;
    children: Array<IMenuItem>;
}

interface IProps {
    handleDrawer: () => void;
    isOpenDrawer: boolean;
    isMobile: boolean;
    menu: Array<IMenuItem>;
}

const MenuLayout = (props: IProps) => {
    // const actions: any = props;

    const styles = makeStyles((theme: Theme) =>
        createStyles({
            rootMenu: {
                marginLeft: -15,
                marginTop: 2,
            },
            childrenMenu: {
                marginLeft: -16,
            },
            menuLink: {
                color: 'inherit',
                textDecoration: 'none',
            },
        }),
    );

    const classes = styles();

    const renderListItem = (menu: IMenuItem) => (
        <ListItem component="div" key={menu.id}>
            <Tooltip
                title={
                    !props.isMobile && !props.isOpenDrawer ? (
                        <Typography> {menu.name}</Typography>
                    ) : (
                        ''
                    )
                }
                arrow
                placement="right"
            >
                <div className={classes.rootMenu}>
                    <ListItemIcon>
                        <Icons name={menu.icon} width={30} height={30} />
                    </ListItemIcon>
                </div>
            </Tooltip>
            <ListItemText primary={menu.name} />
        </ListItem>
    );

    const renderTree = (menu: IMenuItem) => {
        return menu.leaf ? (
            <Link
                className={classes.menuLink}
                to={menu.path}
                onClick={() => {
                    if (props.isMobile === true) {
                        props.handleDrawer();
                    }
                }}
            >
                <TreeItem key={menu.id} nodeId={menu.id} label={renderListItem(menu)}>
                    {menu.children.map((childrenMenu) => (
                        <div className={classes.childrenMenu} key={childrenMenu.id}>
                            {renderTree(childrenMenu)}
                        </div>
                    ))}
                </TreeItem>
            </Link>
        ) : (
            <TreeItem key={menu.id} nodeId={menu.id} label={renderListItem(menu)}>
                {menu.children.map((childrenMenu) => (
                    <div className={classes.childrenMenu} key={childrenMenu.id}>
                        {renderTree(childrenMenu)}
                    </div>
                ))}
            </TreeItem>
        );
    };

    return (
        <div>
            <br />
            <TreeView
                defaultCollapseIcon={<ArrowDropDownIcon />}
                defaultExpandIcon={<ArrowRightIcon />}
            >
                {props.menu.map((menus: IMenuItem, index: any) => renderTree(menus))}
            </TreeView>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return { ...state.AppReducer };
};

export default connect(mapStateToProps, AppAction)(MenuLayout);
