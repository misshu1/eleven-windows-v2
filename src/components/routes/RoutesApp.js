import React, { useContext, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
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
            <Switch>
                <Route
                    exact={isMobile ? true : false}
                    path={isMobile ? '/settings' : '/'}
                    render={() =>
                        settingsOpen === 'open' && (
                            <Suspense fallback={<SpinnerApp delay={200} />}>
                                <SettingsApp />
                            </Suspense>
                        )
                    }
                />

                <Route
                    exact={isMobile ? true : false}
                    path={isMobile ? '/docs' : '/'}
                    render={() =>
                        docsOpen === 'open' && (
                            <Suspense fallback={<SpinnerApp delay={200} />}>
                                <DocsApp />
                            </Suspense>
                        )
                    }
                />
            </Switch>
        </React.Fragment>
    );
};

export default RoutesApp;
