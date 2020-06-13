import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import React, { lazy, Suspense, useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';

import PowerOffIcon from '../../../../../../assets/images/icons/PowerOffIcon';
import { ICON_LOCATION, useFolderContext } from '../../../../../../contexts/folderContext';
import { useNotificationsContext } from '../../../../../../contexts/notificationsContext';
import { useSettingsContext } from '../../../../../../contexts/settingsContext';
import { useAuth } from '../../../../../../hooks/useAuth';
import SpinnerApp from '../../../../../style/SpinnerApp';
import { useStartMenuContext } from '../../../../windows/taskbar/contexts/startMenuContext';
import { Container, LoginContainer, Widget } from './style';

const AuthApp = lazy(() => import('../../../../../auth/AuthApp'));

const useStyles = makeStyles({
    btnStyle: (theme) => ({
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: theme.material.primary.main,
        color: theme.material.primary.contrast.darker,
        margin: '0 1rem',

        '&:hover': {
            backgroundColor: theme.material.primary.darker,
        },
    }),
    btnLabel: {
        width: '100% !important',
    },
});

const AppsMenu = ({ startMenuRef }) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { showError } = useNotificationsContext();
    const { closeStartMenu } = useStartMenuContext();
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));
    const auth = useAuth();
    const { t } = useTranslation();
    const { theme } = useSettingsContext();
    const classes = useStyles(theme);

    const handleLogOut = () => {
        auth.logout().catch((err) => showError('Error', err.message, 500));
    };

    const showAuth = () => {
        setIsAuthOpen(true);
    };

    const hideAuth = () => {
        setIsAuthOpen(false);
    };

    const widgetIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map((location) => {
                if (location === ICON_LOCATION.mobile.appsMenu) {
                    return (
                        <Widget onClick={closeStartMenu} key={app.id}>
                            <Link to={app.link}>
                                {app.widgetIcon}
                                <div className='app-name'>{app.appName}</div>
                            </Link>
                        </Widget>
                    );
                }
                return undefined;
            });
        });
    }, [closeStartMenu]);

    return ReactDOM.createPortal(
        <Container ref={startMenuRef} isAuthOpen={isAuthOpen}>
            {isAuthOpen && (
                <Suspense fallback={<SpinnerApp delay={200} />}>
                    <AuthApp onCancel={hideAuth} />
                </Suspense>
            )}
            {!isAuthOpen && (
                <>
                    <LoginContainer>
                        {!auth.user && (
                            <Button
                                classes={{
                                    root: classes.btnStyle,
                                    label: classes.btnLabel,
                                }}
                                fullWidth
                                onClick={showAuth}
                            >
                                <div className='icon'>
                                    <FontAwesomeIcon
                                        icon={['fas', 'sign-in-alt']}
                                        size='lg'
                                    />
                                </div>
                                {t('auth.login')}
                            </Button>
                        )}
                        {auth.user && (
                            <>
                                <span>
                                    <FontAwesomeIcon
                                        icon={['fas', 'user-circle']}
                                        size='2x'
                                    />
                                </span>
                                <h4>Welcome {auth.user.displayName}.</h4>
                                <Tooltip
                                    title={t('tooltip.logout')}
                                    placement='bottom'
                                    enterDelay={500}
                                >
                                    <div
                                        onClick={handleLogOut}
                                        className='power-off'
                                    >
                                        <PowerOffIcon
                                            width='2rem'
                                            height='2rem'
                                        />
                                    </div>
                                </Tooltip>
                            </>
                        )}
                    </LoginContainer>
                    <Scrollbar>
                        <div className='widgets-container'>{widgetIcons()}</div>
                    </Scrollbar>
                </>
            )}
        </Container>,
        document.getElementById('desktop')
    );
};

export default AppsMenu;
