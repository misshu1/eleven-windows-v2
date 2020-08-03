import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import React, { lazy, Suspense, useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import PowerOffIcon from '../../../../../../assets/images/icons/PowerOffIcon';
import { ICON_LOCATION, useFolderContext } from '../../../../../../contexts/folderContext';
import { useSettingsContext } from '../../../../../../contexts/settingsContext';
import { useAuth } from '../../../../../../hooks/useAuth';
import ScrollbarApp from '../../../../../common/ScrollbarApp';
import SpinnerApp from '../../../../../common/SpinnerApp';
import { Container, LoginContainer, Widget } from './style';

const AuthApp = lazy(() => import('../../../../../auth/AuthApp'));

const useStyles = makeStyles({
    btnStyle: (theme) => ({
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: theme().material.primary.main,
        color: theme().material.primary.contrast.darker,
        margin: '0 1rem',

        '&:hover': {
            backgroundColor: theme().material.primary.darker,
        },
    }),
    btnLabel: {
        width: '100% !important',
    },
});

const AppsMenu = ({ appsMenuRef, closeAppsMenu }) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const {
        checkUserPermisions,
        folderState,
        sortByAppName,
    } = useFolderContext();
    const { getTheme } = useSettingsContext();
    const { t } = useTranslation();
    const classes = useStyles(getTheme);
    const apps = useRef(folderState.apps.sort(sortByAppName));
    const { user, logout } = useAuth();

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
                        checkUserPermisions(app) && (
                            <Widget onClick={closeAppsMenu} key={app.id}>
                                <Link to={app.link}>
                                    {app.widgetIcon}
                                    <div className='app-name'>
                                        {app.appName}
                                    </div>
                                </Link>
                            </Widget>
                        )
                    );
                }
                return undefined;
            });
        });
    }, [checkUserPermisions, closeAppsMenu]);

    return ReactDOM.createPortal(
        <Container ref={appsMenuRef} isAuthOpen={isAuthOpen}>
            {isAuthOpen && (
                <Suspense fallback={<SpinnerApp delay={200} />}>
                    <AuthApp onCancel={hideAuth} />
                </Suspense>
            )}
            {!isAuthOpen && (
                <>
                    <LoginContainer>
                        {!user && (
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
                        {user && (
                            <>
                                <span>
                                    <FontAwesomeIcon
                                        icon={['fas', 'user-circle']}
                                        size='2x'
                                    />
                                </span>
                                <h4>Welcome {user.displayName}.</h4>
                                <Tooltip
                                    title={t('tooltip.logout')}
                                    placement='bottom'
                                    enterDelay={500}
                                >
                                    <div onClick={logout} className='power-off'>
                                        <PowerOffIcon
                                            width='2rem'
                                            height='2rem'
                                        />
                                    </div>
                                </Tooltip>
                            </>
                        )}
                    </LoginContainer>
                    <ScrollbarApp>
                        <div className='widgets-container'>{widgetIcons()}</div>
                    </ScrollbarApp>
                </>
            )}
        </Container>,
        document.getElementById('desktop')
    );
};

export default AppsMenu;
