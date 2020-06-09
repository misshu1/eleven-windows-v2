import React, { useEffect } from 'react';
import { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import { useNotificationsContext } from '../../contexts/notificationsContext';
import Emoji from '../emoji/Emoji';
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

export const Routes = () => {
    const { showInfo } = useNotificationsContext();
    const notification = useRef(() => showInfo(WelcomeTitle, welcomeMessage));

    useEffect(() => {
        notification.current();
    }, []);

    return (
        <Switch>
            <Route exact path='/404' component={NotFound} />
            <Route exact path='/401' component={NotAuthorized} />
            {/* <Route exact path='/login' component={LoginApp} /> */}
            <Route path='/' component={WorkspaceApp} />
        </Switch>
    );
};
