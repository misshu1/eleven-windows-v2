import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth, useMediaQuery } from 'hooks';
import { modalPageAnimation } from 'components/animations';
import { Container, ErrorContainer } from './style';
import { zIndex } from 'components/theme/zIndex';

const useStyles = makeStyles({
    btnStyle: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: 'var(--primary)',
        color: '#fff',
        margin: '2rem 0',
        minWidth: '10rem',

        '&:hover': {
            backgroundColor: 'var(--primaryDark)'
        }
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
        background: 'var(--secondary)'
    }
});

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
    const classes = useStyles();

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
                navigateWithAnimation('/');
            } else {
                navigate('/');
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
            navigateWithAnimation('/');
        } else {
            navigate('/');
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
                        <Button
                            classes={{ root: classes.btnStyle }}
                            onClick={goHome}
                            aria-label='go to homepage'
                        >
                            <div className={classes.icon}>
                                <FontAwesomeIcon
                                    icon={['fas', 'home']}
                                    size='lg'
                                />
                            </div>
                            {t('errors.home')}
                        </Button>
                    </ErrorContainer>
                )}
            </AnimatePresence>
        </Container>,
        document.getElementById('desktop')
    );
};

export default ErrorPageApp;
