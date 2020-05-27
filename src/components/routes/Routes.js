import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginApp from '../login/LoginApp';
import NotAuthorized from '../pages/401/NotAuthorized';
import NotFound from '../pages/404/NotFound';
import WorkspaceApp from '../workspace/WorkspaceApp';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/404' component={NotFound} />
            <Route exact path='/401' component={NotAuthorized} />
            <Route exact path='/login' component={LoginApp} />
            <Route path='/' component={WorkspaceApp} />
        </Switch>
    );
};
