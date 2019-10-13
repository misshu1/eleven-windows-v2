import React, { useContext, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { FolderContext } from '../../contexts/FolderContext';
import { GlobalAppContext } from '../../contexts/GlobalContext';
import SpinnerApp from '../style/SpinnerApp';

const SettingsApp = lazy(() => import('../apps/settings/SettingsApp'));

const RoutesApp = () => {
    const { folder } = useContext(FolderContext);
    const { globalApp } = useContext(GlobalAppContext);
    const { isMobile } = globalApp;
    const { settingsOpen } = folder;

    return (
        <React.Fragment>
            <Suspense fallback={<SpinnerApp />}>
                <Route
                    exact={isMobile ? true : false}
                    path={isMobile ? '/settings' : '/'}
                    render={() => settingsOpen === 'open' && <SettingsApp />}
                />
            </Suspense>
        </React.Fragment>
    );
};

export default RoutesApp;
