import React, { useCallback, useContext, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from './style';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../../contexts/themeContext';
import { Link } from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';

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
    })
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
                <ListItemIcon>
                    <React.Fragment>
                        {item.widgetIcon && (
                            <img src={item.widgetIcon} alt='icon' />
                        )}
                        {item.fontIcon && (
                            <FontAwesomeIcon
                                icon={item.fontIcon}
                                size='2x'
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

const DrawerApp = (props, ref) => {
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
};

export default forwardRef(DrawerApp);
