import React, { useCallback, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from './style';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../../contexts/themeContext';
import { Link } from 'react-router-dom';

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
        color: theme.textColor
    })
});

const ListItemLink = props => {
    return <ListItem button component='a' {...props} />;
};
const DrawerApp = props => {
    const { toolbarMenu } = props;
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);

    const createDrawer = useCallback(() => {
        let menu = [];
        toolbarMenu.map(item => {
            if (item.aTagLink) {
                menu = [
                    ...menu,
                    <ListItemLink
                        href={item.aTagLink}
                        className={classes.listItemStyle}
                        onClick={() => item.onClick && item.onClick()}
                    >
                        <ListItemIcon>
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
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemLink>
                ];
            } else if (item.routerLink) {
                menu = [
                    ...menu,
                    <ListItem
                        button
                        component={props => (
                            <Link to={item.routerLink} {...props} />
                        )}
                        className={classes.listItemStyle}
                        onClick={() => item.onClick && item.onClick()}
                    >
                        <ListItemIcon>
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
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ];
            }
        });
        return menu;
    }, [classes.fontIconStyle, classes.listItemStyle, toolbarMenu]);

    return (
        <Container>
            <List component='nav' className={classes.root}>
                {createDrawer()}
            </List>
        </Container>
    );
};
export default DrawerApp;
