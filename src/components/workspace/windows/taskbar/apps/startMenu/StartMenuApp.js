import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import PowerOffIcon from '../../../../../../assets/images/icons/PowerOffIcon';
import { useSettingsContext } from '../../../../../../contexts/settingsContext';
import { useAuth } from '../../../../../../hooks/useAuth';
import ScrollbarApp from '../../../../../common/ScrollbarApp';
import SpinnerApp from '../../../../../common/SpinnerApp';
import { useStartMenuContext } from '../../contexts/startMenuContext';
import LeftMenuApp from './leftMenu/LeftMenuApp';
import RightMenuApp from './rightMenu/RightMenuApp';
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

const StartMenuApp = ({ startMenuRef }) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { closeStartMenu } = useStartMenuContext();
    const { theme } = useSettingsContext();
    const classes = useStyles(theme);
    const auth = useAuth();
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
                                    <Widget onClick={auth.logout}>
                                        <PowerOffIcon
                                            width='2rem'
                                            height='2rem'
                                        />
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
