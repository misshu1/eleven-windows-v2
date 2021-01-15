import Backdrop from '@material-ui/core/Backdrop';
import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth, useMediaQuery } from 'hooks';
import { modalPageAnimation } from 'components/animations';
import { Container, ErrorContainer } from './style';
import { zIndex } from 'components/theme/zIndex';
import { ROUTES } from 'components/common';
import { PrimaryButton } from 'components/common/Buttons';

const ERRORS_LIST = [
    {
        code: 404,
        title: 'errors.404.title',
        message: 'errors.404.message'
    },
    {
        code: 401,
        title: 'errors.401.title',
        message: 'errors.401.message'
    },
    {
        code: 500,
        title: 'errors.500.title',
        message: 'errors.500.message'
    }
];

const ErrorPageApp = () => {
    const [error, setError] = useState({});
    const [showError, setShowError] = useState(true);
    const { isUserAdmin } = useAuth();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width: 450px)');

    useEffect(() => {
        // When folder route requires admin role
        // And we navigate to the folder route directly from the address bar
        // Redirect the user back after auto-login
        if (
            isUserAdmin() &&
            !!location.state?.nextPathname &&
            location.pathname === '/401'
        ) {
            if (!isMobile) {
                navigateWithAnimation(location.state.nextPathname);
            } else {
                navigate(location.state.nextPathname);
            }
        } else if (
            isUserAdmin() &&
            !location.state?.nextPathname &&
            location.pathname === '/401'
        ) {
            if (!isMobile) {
                navigateWithAnimation(ROUTES.root);
            } else {
                navigate(ROUTES.root);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUserAdmin]);

    useEffect(() => {
        const errorCode = Number(location.pathname.replace('/', ''));

        if (ERRORS_LIST.some((error) => error.code === errorCode)) {
            const error = ERRORS_LIST.find((error) => error.code === errorCode);
            setError(error);
        }
    }, [error, location]);

    const navigateWithAnimation = useCallback((path) => {
        setShowError(false);

        // setTimeout is used for unmount animation
        setTimeout(() => {
            navigate(path);
        }, 210);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goHome = useCallback(() => {
        if (!isMobile) {
            navigateWithAnimation(ROUTES.root);
        } else {
            navigate(ROUTES.root);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ReactDOM.createPortal(
        <Container>
            <Backdrop
                open={showError}
                onClick={goHome}
                style={{
                    zIndex: zIndex.page.backdrop,
                    background: 'rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(10px)'
                }}
            />
            <AnimatePresence>
                {showError && (
                    <ErrorContainer
                        key='modalPageAnimation'
                        initial='initial'
                        animate='open'
                        exit='close'
                        variants={!isMobile && modalPageAnimation}
                    >
                        <h1 className='error-code'>{t(error.code)}</h1>
                        <h3 className='error-title'>{t(error.title)}</h3>
                        <p className='error-message'>{t(error.message)}</p>
                        <PrimaryButton
                            aria-label='go to homepage'
                            onClick={goHome}
                            fontIcon={['fas', 'home']}
                            style={{ minWidth: '10rem' }}
                        >
                            {t('errors.home')}
                        </PrimaryButton>
                    </ErrorContainer>
                )}
            </AnimatePresence>
        </Container>,
        document.getElementById('desktop')
    );
};

export default ErrorPageApp;
