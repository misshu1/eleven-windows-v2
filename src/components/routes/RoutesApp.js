import React, { useContext, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { FolderContext } from '../../contexts/FolderContext';
import { GlobalAppContext } from '../../contexts/GlobalContext';

const SettingsApp = lazy(() => import('../apps/settings/SettingsApp'));

const RoutesApp = () => {
    const { folder } = useContext(FolderContext);
    const { globalApp } = useContext(GlobalAppContext);

    return (
        <React.Fragment>
            <Route
                exact={globalApp.isMobile ? true : false}
                path={globalApp.isMobile ? '/settings' : '/'}
                render={() => folder.settingsOpen === 'open' && <SettingsApp />}
            />
        </React.Fragment>
    );
};

export default RoutesApp;
