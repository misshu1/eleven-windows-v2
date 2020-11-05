import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { forwardRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { ScrollbarApp } from 'components/common';
import { Container } from './style';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: 'transparent',
        color: 'var(--colorDefault)'
    },
    listItemStyle: {
        '&:hover': {
            cursor: 'default',
            background: 'rgba(0, 0, 0, 0.2)'
        }
    },
    fontIconStyle: {
        color: 'var(--primary)'
    },
    listIconStyle: {
        marginRight: '1rem',
        width: '2rem',
        height: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 'unset'
    }
});

const scrollToRef = (refObj, refName) => {
    if (!refObj && !refName) {
        return;
    }
    refObj[refName].current.offsetParent.offsetParent.scrollTop =
        refObj[refName].current.offsetTop;
};

const Drawer = forwardRef((props, ref) => {
    const { toolbarMenu, closeDrawer } = props;
    const classes = useStyles();

    const close = useCallback(() => {
        setTimeout(() => {
            closeDrawer();
        }, 30);
    }, [closeDrawer]);

    const createDrawer = useCallback(() => {
        let menu = [];
        toolbarMenu.map(
            (item) =>
                (menu = [
                    ...menu,
                    <ListItemLink
                        key={item.name}
                        item={item}
                        onClick={() => {
                            item.scrollToRef &&
                                scrollToRef(ref, item.scrollToRef);
                            item.onClick && item.onClick();
                            close();
                        }}
                    />
                ])
        );

        return menu;
    }, [close, ref, toolbarMenu]);

    return (
        <List component='nav' className={classes.root}>
            {createDrawer()}
        </List>
    );
});

const ListItemLink = ({ item, onClick }) => {
    const classes = useStyles();

    return (
        <ListItem
            button
            component={item.link && (() => <Link to={item.link} />)}
            className={classes.listItemStyle}
            onClick={onClick}
        >
            {(item.widgetIcon || item.fontIcon) && (
                <ListItemIcon className={classes.listIconStyle}>
                    <>
                        {!!item.widgetIcon && item.widgetIcon}
                        {!!item.fontIcon && (
                            <>
                                <FontAwesomeIcon
                                    {...item.fontIcon}
                                    size='lg'
                                    className={classes.fontIconStyle}
                                />
                            </>
                        )}
                    </>
                </ListItemIcon>
            )}
            <ListItemText primary={item.name} />
        </ListItem>
    );
};

export const DrawerApp = forwardRef((props, ref) => {
    const { toolbarMenu, closeDrawer } = props;

    return (
        <Container>
            <ScrollbarApp requireChildrenProps>
                <Drawer
                    toolbarMenu={toolbarMenu}
                    closeDrawer={closeDrawer}
                    ref={ref}
                />
            </ScrollbarApp>
        </Container>
    );
});

Drawer.displayName = 'Drawer';
DrawerApp.displayName = 'Drawer';

DrawerApp.propTypes = {
    toolbarMenu: PropTypes.array.isRequired,
    closeDrawer: PropTypes.func.isRequired
};
