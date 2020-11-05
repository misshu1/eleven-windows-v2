import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useNotificationsContext } from 'contexts';
import { Emoji, SpinnerApp } from 'components/common';
import WorkspaceApp from 'components/workspace/WorkspaceApp';

const LoginPage = lazy(() => import('components/pages/login/LoginPage'));
const ErrorPageApp = lazy(() =>
    import('components/pages/errorPage/ErrorPageApp')
);
const CheckoutPageApp = lazy(() =>
    import('components/pages/checkout/CheckoutPageApp')
);

const WelcomeTitle = (
    <span>
        Welcome <Emoji symbol='🌞' label='happy sun' />
    </span>
);
const welcomeMessage = (
    <span>
        This website is still in development
        <br />
        Check out my{' '}
        <a
            href='https://github.com/misshu1'
            target='_blank'
            rel='noopener noreferrer'
            style={{
                color: 'inherit',
                fontSize: '1.1rem',
                fontStyle: 'italic'
            }}
        >
            Github Profile
        </a>
    </span>
);

const RoutesApp = () => {
    const { showInfo } = useNotificationsContext();
    const notification = useRef(() => showInfo(WelcomeTitle, welcomeMessage));

    useEffect(() => {
        notification.current();
    }, []);

    return (
        <Routes>
            <Route
                path='/404'
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <ErrorPageApp />
                    </Suspense>
                }
            />

            <Route
                path='/401'
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <ErrorPageApp />
                    </Suspense>
                }
            />

            <Route
                path='/500'
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <ErrorPageApp />
                    </Suspense>
                }
            />

            <Route
                path='/login'
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <LoginPage />
                    </Suspense>
                }
            />

            <Route
                path='/checkout'
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <CheckoutPageApp />
                    </Suspense>
                }
            />

            <Route path='/*' element={<WorkspaceApp />} />
        </Routes>
    );
};

export default RoutesApp;
