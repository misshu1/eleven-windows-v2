import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import PowerOffIcon from '../../../../../../assets/images/icons/PowerOffIcon';
import { useAuth } from '../../../../../../hooks/useAuth';
import LoginButton from '../../../../../auth/LoginButton';
import ScrollbarApp from '../../../../../common/ScrollbarApp';
import SpinnerApp from '../../../../../common/SpinnerApp';
import { useStartMenuContext } from '../../contexts/startMenuContext';
import LeftMenuApp from './leftMenu/LeftMenuApp';
import RightMenuApp from './rightMenu/RightMenuApp';
import { Container, LoginContainer, Widget } from './style';

const AuthApp = lazy(() => import('../../../../../auth/AuthApp'));

const StartMenuApp = ({ startMenuRef }) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { closeStartMenu } = useStartMenuContext();
    const { user, logout } = useAuth();
    const { t } = useTranslation();

    const showAuth = () => {
        setIsAuthOpen(true);
    };

    const hideAuth = () => {
        setIsAuthOpen(false);
    };

    return ReactDOM.createPortal(
        <Container ref={startMenuRef} isAuthOpen={isAuthOpen}>
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
                                    <Widget onClick={logout}>
                                        <PowerOffIcon />
                                    </Widget>
                                </Tooltip>
                            </>
                        )}
                    </LoginContainer>
                    <div className='menu-container'>
                        <LeftMenuApp closeStartMenu={closeStartMenu} />
                        <ScrollbarApp>
                            <RightMenuApp closeStartMenu={closeStartMenu} />
                        </ScrollbarApp>
                    </div>
                </>
            )}
        </Container>,
        document.getElementById('desktop')
    );
};

export default StartMenuApp;
