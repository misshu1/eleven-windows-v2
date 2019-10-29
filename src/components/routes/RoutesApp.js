import React, { useContext, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { FolderContext } from '../../contexts/FolderContext';
import { GlobalAppContext } from '../../contexts/GlobalContext';
import SpinnerApp from '../style/SpinnerApp';

const SettingsApp = lazy(() => import('../apps/settings/SettingsApp'));
const DocsApp = lazy(() => import('../apps/docs/Docs'));

const RoutesApp = () => {
    const { folder } = useContext(FolderContext);
    const { globalApp } = useContext(GlobalAppContext);
    const { isMobile } = globalApp;
    const { settingsOpen, docsOpen } = folder;

    return (
        <React.Fragment>
            <Suspense fallback={<SpinnerApp delay={200} />}>
                <Route
                    exact={isMobile ? true : false}
                    path={isMobile ? '/settings' : '/'}
                    render={() => settingsOpen === 'open' && <SettingsApp />}
                />
            </Suspense>
            <Suspense fallback={<SpinnerApp delay={200} />}>
                <Route
                    exact={isMobile ? true : false}
                    path={isMobile ? '/docs' : '/'}
                    render={() => docsOpen === 'open' && <DocsApp />}
                />
            </Suspense>
        </React.Fragment>
    );
};

export default RoutesApp;
