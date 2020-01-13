import React, { useCallback, useContext, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../../contexts/themeContext';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from './style';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Scrollbar from 'react-scrollbars-custom';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
    root: theme => ({
        width: '100%',
        maxWidth: '100%',
        backgroundColor: 'transparent',
        color: theme.textColor
    }),
    listItemStyle: {
        '&:hover': {
            cursor: 'default',
            background: 'rgba(0, 0, 0, 0.2)'
        }
    },
    fontIconStyle: theme => ({
        color: theme.accentBg
    }),
    listIconStyle: {
        marginRight: '1rem',
        width: '2rem',
        height: '2rem',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const scrollToRef = (refObj, refName) => {
    if (!refObj && !refName) {
        return;
    }

    refObj[refName].current.offsetParent.scrollTop =
        refObj[refName].current.offsetTop;
};

const ListItemLink = props => {
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);
    const { item, onClick } = props;

    return (
        <ListItem
            button
            component={
                item.link && (props => <Link to={item.link} {...props} />)
            }
            className={classes.listItemStyle}
            onClick={onClick}
        >
            {(item.widgetIcon || item.fontIcon) && (
                <ListItemIcon className={classes.listIconStyle}>
                    <React.Fragment>
                        {item.widgetIcon && item.widgetIcon}
                        {item.fontIcon && (
                            <FontAwesomeIcon
                                icon={item.fontIcon}
                                size='lg'
                                className={classes.fontIconStyle}
                            />
                        )}
                    </React.Fragment>
                </ListItemIcon>
            )}
            <ListItemText primary={item.name} />
        </ListItem>
    );
};

const DrawerApp = forwardRef((props, ref) => {
    const { toolbarMenu, closeDrawer } = props;
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);

    const createDrawer = useCallback(() => {
        let menu = [];
        toolbarMenu.map(
            item =>
                (menu = [
                    ...menu,
                    <ListItemLink
                        key={item.name}
                        item={item}
                        onClick={() => {
                            item.scrollToRef &&
                                scrollToRef(ref, item.scrollToRef);
                            item.onClick && item.onClick();
                            closeDrawer();
                        }}
                    />
                ])
        );
        return menu;
    }, [closeDrawer, ref, toolbarMenu]);

    return (
        <Container>
            <Scrollbar style={{ width: '100%', height: '100%' }}>
                <List component='nav' className={classes.root}>
                    {createDrawer()}
                </List>
            </Scrollbar>
        </Container>
    );
});

export default DrawerApp;

DrawerApp.propTypes = {
    toolbarMenu: PropTypes.array.isRequired,
    closeDrawer: PropTypes.func.isRequired
};
