import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import React, { lazy, Suspense, useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PowerOffIcon } from 'assets/images/icons';
import { useFolderContext } from 'contexts';
import { useAuth } from 'hooks';
import LoginButton from 'components/auth/LoginButton';
import { ScrollbarApp, SpinnerApp, ICON_LOCATION } from 'components/common';
import { Container, LoginContainer, Widget } from './style';

const AuthApp = lazy(() => import('components/auth/AuthApp'));

const AppsMenu = ({ appsMenuRef, closeAppsMenu }) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const {
        checkUserPermisions,
        folderState,
        sortByAppName
    } = useFolderContext();
    const { t } = useTranslation();
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
                    <LoginContainer isLoginButtonVisible={!user}>
                        {!user && <LoginButton onClick={showAuth} />}
                        {user && (
                            <>
                                <FontAwesomeIcon
                                    icon={['fas', 'user-circle']}
                                    size='2x'
                                    style={{ margin: '0 .5rem' }}
                                />
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
