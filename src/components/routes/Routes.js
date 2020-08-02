import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useNotificationsContext } from '../../contexts/notificationsContext';
import Emoji from '../common/Emoji';
import SpinnerApp from '../common/SpinnerApp';
import WorkspaceApp from '../workspace/WorkspaceApp';

// import NotAuthorized from '../pages/401/NotAuthorized';
// import NotFound from '../pages/404/NotFound';
// import LoginPage from '../pages/login/LoginPage';
const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const NotFound = lazy(() => import('../pages/404/NotFound'));
const NotAuthorized = lazy(() => import('../pages/401/NotAuthorized'));

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
            <Suspense fallback={<SpinnerApp delay={200} global />}>
                <Route path='/404' element={<NotFound />} />
            </Suspense>

            <Suspense fallback={<SpinnerApp delay={200} global />}>
                <Route path='/401' element={<NotAuthorized />} />
            </Suspense>

            <Suspense fallback={<SpinnerApp delay={200} global />}>
                <Route path='/login' element={<LoginPage />} />
            </Suspense>

            <Route path='/*' element={<WorkspaceApp />} />
        </Routes>
    );
};
