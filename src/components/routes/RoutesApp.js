import React, { useContext, lazy, Suspense, useEffect } from 'react';
import { useAppIconsContext } from '../../contexts/appIconsContext';
import { GlobalAppContext } from '../../contexts/globalContext';
import { FolderContext } from '../../contexts/folderContext';
import { Route } from 'react-router-dom';
import SpinnerApp from '../style/SpinnerApp';

const SettingsApp = lazy(() => import('../apps/settings/SettingsApp'));
const DocsApp = lazy(() => import('../apps/docs/DocsApp'));
const StoreApp = lazy(() => import('../apps/store/StoreApp'));
const CalculatorApp = lazy(() => import('../apps/calculator/CalculatorApp'));
const TaskManagerApp = lazy(() => import('../apps/taskManager/TaskManagerApp'));

const RoutesApp = () => {
    const { icons } = useAppIconsContext();
    const { folder, startApp } = useContext(FolderContext);
    const { globalApp } = useContext(GlobalAppContext);
    const { isMobile } = globalApp;
    const {
        settingsOpen,
        docsOpen,
        taskManagerOpen,
        storeOpen,
        calculatorOpen
    } = folder;

    // Route paths are only for mobile
    // Here we check the url to see if it contains any paths and open the app if the url contains the route
    // For example https://example.com/docs if docs is in the url we open docs app
    useEffect(() => {
        const href = window.location.href.split('/');
        icons.map(
            item =>
                href[href.length - 1] === item.linkMobile.replace(/\//g, '') &&
                startApp(
                    item.appOpen,
                    item.widgetIcon,
                    item.appIndexName,
                    item.appMinimize,
                    item.iconDisplayName
                )
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
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

            <Route
                exact={isMobile ? true : false}
                path={isMobile ? '/store' : '/'}
                render={() =>
                    storeOpen === 'open' && (
                        <Suspense fallback={<SpinnerApp delay={200} />}>
                            <StoreApp />
                        </Suspense>
                    )
                }
            />

            <Route
                exact={isMobile ? true : false}
                path={isMobile ? '/calculator' : '/'}
                render={() =>
                    calculatorOpen === 'open' && (
                        <Suspense fallback={<SpinnerApp delay={200} />}>
                            <CalculatorApp />
                        </Suspense>
                    )
                }
            />

            <Route
                path='/'
                render={() =>
                    taskManagerOpen === 'open' && (
                        <Suspense fallback={<SpinnerApp delay={200} />}>
                            <TaskManagerApp />
                        </Suspense>
                    )
                }
            />
        </React.Fragment>
    );
};

export default RoutesApp;
