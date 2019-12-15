import React, {
    useContext,
    lazy,
    Suspense,
    useEffect,
    useState,
    useCallback
} from 'react';
import { useAppIconsContext } from '../../contexts/appIconsContext';
import { GlobalAppContext } from '../../contexts/globalContext';
import { FolderContext } from '../../contexts/folderContext';
import { IndexContext } from '../../contexts/indexContext';
import { Route } from 'react-router-dom';
import SpinnerApp from '../style/SpinnerApp';

const SettingsApp = lazy(() => import('../apps/settings/SettingsApp'));
const DocsApp = lazy(() => import('../apps/docs/DocsApp'));
const StoreApp = lazy(() => import('../apps/store/StoreApp'));
const CalculatorApp = lazy(() => import('../apps/calculator/CalculatorApp'));
const TaskManagerApp = lazy(() => import('../apps/taskManager/TaskManagerApp'));

const COMPONENTS = [
    {
        id: 1,
        component: <DocsApp />
    },
    {
        id: 2,
        component: <StoreApp />
    },
    {
        id: 3,
        component: <SettingsApp />
    },
    {
        id: 4,
        component: <TaskManagerApp />
    },
    {
        id: 5,
        component: <CalculatorApp />
    }
];

const RoutesApp = () => {
    const [newComponents, setNewComponents] = useState([]);
    const { icons } = useAppIconsContext();
    const { folder, startApp } = useContext(FolderContext);
    const { activeWindow } = useContext(IndexContext);
    const { globalApp } = useContext(GlobalAppContext);
    const { isMobile } = globalApp;

    const updateComponentsArray = useCallback(() => {
        icons.map(item => {
            return COMPONENTS.map(
                component =>
                    item.id === component.id &&
                    setNewComponents(prevState => [
                        ...prevState,
                        { ...component, ...item }
                    ])
            );
        });
    }, [icons]);

    useEffect(() => {
        updateComponentsArray();
    }, [updateComponentsArray]);

    // Route paths are only for mobile
    // Here we check the url to see if it contains any paths and open the app if the url contains the route
    // For example https://example.com/docs if docs is in the url we open docs app
    useEffect(() => {
        const href = window.location.href.split('/');
        icons.map(item => {
            if (href[href.length - 1] === item.linkMobile.replace(/\//g, '')) {
                startApp(
                    item.appOpen,
                    item.widgetIcon,
                    item.appIndexName,
                    item.appMinimize,
                    item.iconDisplayName
                );
                activeWindow(item.appIndexName);
            }
            return undefined;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            {newComponents.map(item => (
                <Route
                    key={item.id}
                    exact={isMobile ? true : false}
                    path={isMobile ? item.linkMobile : '/'}
                    render={() =>
                        folder[item.appOpen] === 'open' && (
                            <Suspense fallback={<SpinnerApp delay={200} />}>
                                {item.component}
                            </Suspense>
                        )
                    }
                />
            ))}
        </React.Fragment>
    );
};

export default RoutesApp;
