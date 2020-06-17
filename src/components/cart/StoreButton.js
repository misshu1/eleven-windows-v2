import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import StoreIcon from '../../assets/images/icons/StoreIcon';
import { ICON_LOCATION, useDispatchFolderContext, useFolderContext } from '../../contexts/folderContext';
import { useSettingsContext } from '../../contexts/settingsContext';
import useMediaQuery from '../../hooks/useMediaQuery';

const useStyles = makeStyles({
    btnStyle: (theme) => ({
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: theme.material.primary.main,
        color: theme.material.primary.contrast.darker,

        '&:hover': {
            backgroundColor: theme.material.primary.darker,
        },
    }),
    btnStyleMobile: (theme) => ({
        display: 'inline-block',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        fontWeight: '500',
        lineHeight: '1.75',
        borderRadius: '4px',
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
        background: theme.material.primary.main,
        color: theme.material.primary.contrast.darker,

        '&:hover': {
            background: theme.material.primary.darker,
        },
    }),
    btnStyleMobileText: {
        display: 'inline-block',
        padding: '6px 8px',
    },
    icon: (theme) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        width: '2.5rem',
        transition: 'background 0.2s ease-in-out',
        borderTopRightRadius: '0 0',
        borderBottomRightRadius: '37% 100%',
        background: theme.material.accent.main,
    }),
});

const StoreButton = ({ onClick }) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { folderState } = useFolderContext();
    const { theme } = useSettingsContext();
    const apps = useRef(folderState.apps);
    const classes = useStyles(theme);
    const isMobile = useMediaQuery('(max-width: 450px)');

    const openApp = (appId) => {
        openFolder(appId);
        activeFolder(appId);
        minimizeUp(appId);
        onClick();
    };

    const mobileBtn = () => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.cart.cartApp && (
                        <Link
                            to={app.link}
                            key={app.id}
                            onClick={onClick}
                            className={classes.btnStyleMobile}
                        >
                            <div className={classes.icon}>
                                <StoreIcon width='1.5rem' height='1.5rem' />
                            </div>
                            <span className={classes.btnStyleMobileText}>
                                Go to {app.appName}
                            </span>
                        </Link>
                    )
            );
        });
    };

    const desktopBtn = () => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.cart.cartApp && (
                        <Button
                            classes={{ root: classes.btnStyle }}
                            onClick={() => openApp(app.id)}
                            key={app.id}
                        >
                            <div className={classes.icon}>
                                <StoreIcon width='1.5rem' height='1.5rem' />
                            </div>
                            Go to {app.appName}
                        </Button>
                    )
            );
        });
    };

    return (
        <>
            {isMobile && mobileBtn()}
            {!isMobile && desktopBtn()}
        </>
    );
};

export default StoreButton;
