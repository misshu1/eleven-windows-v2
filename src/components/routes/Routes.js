import React, { useEffect } from 'react';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useNotificationsContext } from '../../contexts/notificationsContext';
import Emoji from '../common/Emoji';
import NotAuthorized from '../pages/401/NotAuthorized';
import NotFound from '../pages/404/NotFound';
import WorkspaceApp from '../workspace/WorkspaceApp';

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
            <Route path='/404' element={<NotFound />} />
            <Route path='/401' element={<NotAuthorized />} />
            {/* <Route exact path='/login' component={LoginApp} /> */}
            <Route path='/*' element={<WorkspaceApp />} />
        </Routes>
    );
};
