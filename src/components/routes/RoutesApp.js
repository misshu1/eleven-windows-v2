import React, { useContext, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { FolderContext } from '../../contexts/folderContext';
import { GlobalAppContext } from '../../contexts/globalContext';
import SpinnerApp from '../style/SpinnerApp';
import TaskManagerApp from '../apps/taskManager/TaskManagerApp';
import StoreApp from '../apps/store/StoreApp';
import CalculatorApp from '../apps/calculator/CalculatorApp';

const SettingsApp = lazy(() => import('../apps/settings/SettingsApp'));
const DocsApp = lazy(() => import('../apps/docs/Docs'));

const RoutesApp = () => {
    const { folder } = useContext(FolderContext);
    const { globalApp } = useContext(GlobalAppContext);
    const { isMobile } = globalApp;
    const {
        settingsOpen,
        docsOpen,
        taskManagerOpen,
        storeOpen,
        calculatorOpen
    } = folder;

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
