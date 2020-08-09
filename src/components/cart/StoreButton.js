import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import StoreIcon from '../../assets/images/icons/StoreIcon';
import { ICON_LOCATION, useDispatchFolderContext, useFolderContext } from '../../contexts/folderContext';
import useMediaQuery from '../../hooks/useMediaQuery';

const useStyles = makeStyles({
    btnStyle: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: 'var(--primary)',
        color: '#fff',

        '&:hover': {
            backgroundColor: 'var(--primaryDark)',
        },
    },
    btnStyleMobile: {
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
        backgroundColor: 'var(--primary)',
        color: '#fff',

        '&:hover': {
            backgroundColor: 'var(--primaryDark)',
        },
    },
    btnStyleMobileText: {
        display: 'inline-block',
        padding: '6px 8px',
    },
    icon: {
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
        background: 'var(--secondary)',
    },
});

const StoreButton = ({ onClick }) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { checkUserPermisions, folderState } = useFolderContext();
    const apps = useRef(folderState.apps);
    const classes = useStyles();
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
                    location === ICON_LOCATION.cart.cartApp &&
                    checkUserPermisions(app) && (
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
                    location === ICON_LOCATION.cart.cartApp &&
                    checkUserPermisions(app) && (
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
