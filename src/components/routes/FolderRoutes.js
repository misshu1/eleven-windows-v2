import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';

import { useDispatchFolderContext, useFolderContext } from '../../contexts/folderContext';
import useMediaQuery from '../../hooks/useMediaQuery';
import SpinnerApp from '../style/SpinnerApp';

const FolderRoutes = () => {
    const [pathExists, setPathExists] = useState(true);
    const { folderState } = useFolderContext();
    const { openFolder, closeFolder } = useDispatchFolderContext();
    const lastLocation = useLastLocation();
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width: 450px)');

    // Check to see if the route exists in folderState if not user will be redirected to 404
    useLayoutEffect(() => {
        const folderPaths = folderState.apps.some(
            (app) => location.pathname === app.link
        );

        if (!folderPaths && location.pathname !== '/') {
            setPathExists(false);
        } else {
            setPathExists(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Here we check the route path and check if it contains any folder routes specified in 'folderContext'
    // And open the app if the url contains the folder route
    // For example http://localhost:3000/docs if '/docs' is in the url we open Docs app
    useEffect(() => {
        folderState.apps.map((app) => {
            // Only one folder can be open when navigating between routes
            // Here we close the previous opened folder
            // This will prevent keeping more than one folder opened on mobile
            if (lastLocation?.pathname === app.link) {
                closeFolder(app.id);
            }
            if (location.pathname === app.link) {
                openFolder(app.id);
            }
            return undefined;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    return (
        <>
            {!pathExists && <Redirect to='/404' />}
            {folderState.apps.map((app) => (
                <Route
                    key={app.id}
                    exact={isMobile ? true : false}
                    path={isMobile ? app.link : '/'}
                    render={() =>
                        app.isOpen && (
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

export default FolderRoutes;
