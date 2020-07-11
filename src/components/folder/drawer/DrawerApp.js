import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { forwardRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useSettingsContext } from '../../../contexts/settingsContext';
import ScrollbarApp from '../../common/ScrollbarApp';
import { Container } from './style';

const Drawer = forwardRef((props, ref) => {
    const { toolbarMenu, closeDrawer } = props;
    const { theme } = useSettingsContext();
    const classes = useStyles(theme);

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
                    />,
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

const useStyles = makeStyles({
    root: (theme) => ({
        width: '100%',
        maxWidth: '100%',
        backgroundColor: 'transparent',
        color: theme.textColor,
    }),
    listItemStyle: {
        '&:hover': {
            cursor: 'default',
            background: 'rgba(0, 0, 0, 0.2)',
        },
    },
    fontIconStyle: (theme) => ({
        color: theme.accentBg,
    }),
    listIconStyle: {
        marginRight: '1rem',
        width: '2rem',
        height: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 'unset',
    },
});

const scrollToRef = (refObj, refName) => {
    if (!refObj && !refName) {
        return;
    }
    refObj[refName].current.offsetParent.offsetParent.scrollTop =
        refObj[refName].current.offsetTop;
};

const ListItemLink = ({ item, onClick }) => {
    const { theme } = useSettingsContext();
    const classes = useStyles(theme);

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
                        {item.widgetIcon && item.widgetIcon}
                        {item.fontIcon && (
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

const DrawerApp = forwardRef((props, ref) => {
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

export default DrawerApp;

DrawerApp.propTypes = {
    toolbarMenu: PropTypes.array.isRequired,
    closeDrawer: PropTypes.func.isRequired,
};
