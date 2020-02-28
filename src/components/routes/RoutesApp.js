import React, { useContext, Suspense, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { GlobalAppContext } from '../../contexts/globalContext';
import { FolderContext } from '../../contexts/folderContext';
import SpinnerApp from '../style/SpinnerApp';

const RoutesApp = () => {
    const { folderState, openFolder } = useContext(FolderContext);
    const { globalApp } = useContext(GlobalAppContext);
    const { isMobile } = globalApp;
    const location = useLocation();

    // Route paths are only for mobile
    // Here we check the url to see if it contains any paths and open the app if the url contains the route
    // For example https://example.com/docs if docs is in the url we open docs app
    useEffect(() => {
        folderState.apps.map(app => {
            if (location.pathname === app.link) {
                openFolder(app.id);
            }
            return undefined;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {folderState.apps.map(app => (
                <Route
                    key={app.id}
                    exact={isMobile ? true : false}
                    path={isMobile ? app.link : '/'}
                    render={() =>
                        app.isOpen === 'open' && (
                            <Suspense fallback={<SpinnerApp delay={200} />}>
                                {app.component}
                            </Suspense>
                        )
                    }
                />
            ))}
        </>
    );
};

export default RoutesApp;
