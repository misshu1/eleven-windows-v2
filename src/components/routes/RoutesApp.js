import React, {
    useContext,
    lazy,
    Suspense,
    useEffect,
    useCallback
} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FolderContext } from '../../contexts/folderContext';
import { GlobalAppContext } from '../../contexts/globalContext';
import SpinnerApp from '../style/SpinnerApp';
import TaskManagerApp from '../apps/taskManager/TaskManagerApp';
import StoreApp from '../apps/store/StoreApp';
import CalculatorApp from '../apps/calculator/CalculatorApp';
import cogIcon from '../../assets/images/icons/cog.svg';
import taskIcon from '../../assets/images/icons/task.svg';
import docsIcon from '../../assets/images/icons/docs.svg';
import storeIcon from '../../assets/images/icons/store.svg';
import calcIcon from '../../assets/images/icons/calculator.svg';

const SettingsApp = lazy(() => import('../apps/settings/SettingsApp'));
const DocsApp = lazy(() => import('../apps/docs/Docs'));

const APPS = [
    {
        url: 'docs',
        appName: 'Docs',
        widgetIcon: docsIcon,
        appIndexName: 'docs',
        appMinimize: 'docsMinimize',
        appOpen: 'docsOpen'
    },
    {
        url: 'settings',
        appName: 'Settings',
        widgetIcon: cogIcon,
        appIndexName: 'settings',
        appMinimize: 'settingsMinimize',
        appOpen: 'settingsOpen'
    },
    {
        url: 'store',
        appName: 'Store',
        widgetIcon: storeIcon,
        appIndexName: 'store',
        appMinimize: 'storeMinimize',
        appOpen: 'storeOpen'
    },
    {
        url: 'calculator',
        appName: 'Calculator',
        widgetIcon: calcIcon,
        appIndexName: 'calculator',
        appMinimize: 'calculatorMinimize',
        appOpen: 'calculatorOpen'
    },
    {
        url: 'taskManager',
        appName: 'Task Manager',
        widgetIcon: taskIcon,
        appIndexName: 'taskManager',
        appMinimize: 'taskManagerMinimize',
        appOpen: 'taskManagerOpen'
    }
];

const RoutesApp = () => {
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
    // Here we check the url and open the app if the url contains the mobile route
    // For example https://example.com/docs if docs is in the url we open docs app
    useEffect(() => {
        const href = window.location.href.split('/');
        APPS.map(
            item =>
                href[href.length - 1] === item.url &&
                startApp(
                    item.appOpen,
                    item.widgetIcon,
                    item.appIndexName,
                    item.appMinimize,
                    item.appName
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
