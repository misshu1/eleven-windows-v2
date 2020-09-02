import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useNotificationsContext } from '../../contexts/notificationsContext';
import Emoji from '../common/Emoji';
import SpinnerApp from '../common/SpinnerApp';
import WorkspaceApp from '../workspace/WorkspaceApp';

const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const ErrorPageApp = lazy(() => import('../pages/errorPage/ErrorPageApp'));
const CheckoutApp = lazy(() => import('../pages/checkout/CheckoutApp'));

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
                fontStyle: 'italic',
            }}
        >
            Github Profile
        </a>
    </span>
);

export const RoutesApp = () => {
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
                        <CheckoutApp />
                    </Suspense>
                }
            />

            <Route path='/*' element={<WorkspaceApp />} />
        </Routes>
    );
};
