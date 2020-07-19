import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, Route, useLocation, useNavigate } from 'react-router-dom';

import { useDispatchFolderContext, useFolderContext } from '../../contexts/folderContext';
import { useAuth } from '../../hooks/useAuth';
import useMediaQuery from '../../hooks/useMediaQuery';
import usePrevious from '../../hooks/usePrevious';
import SpinnerApp from '../common/SpinnerApp';

const FolderRoutes = () => {
    const [pathExists, setPathExists] = useState(true);
    const { folderState } = useFolderContext();
    const { openFolder, closeAllFolders } = useDispatchFolderContext();
    const navigate = useNavigate();
    const location = useLocation();
    const prevLocation = usePrevious(location);
    const isMobile = useMediaQuery('(max-width: 450px)');
    const { isUserAdmin, isUserLoggedIn } = useAuth();

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

    // Only one folder can be open when navigating between routes
    // Here we close the previous opened folders
    // This will prevent keeping more than one folder opened on mobile
    useEffect(() => {
        folderState.apps.map((app) => {
            if (
                prevLocation?.pathname === app.link ||
                (location.pathname === '/' &&
                    prevLocation?.pathname === app.link)
            ) {
                closeAllFolders();
            }
            return undefined;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, isMobile]);

    // Here we check the route path and check if it contains any folder routes specified in 'folderContext'
    // And open the app if the url contains the folder route
    // For example http://localhost:3000/docs if '/docs' is in the url we open Docs app
    useEffect(() => {
        folderState.apps.map((app) => {
            if (location.pathname === app.link) {
                if (app.requireAdmin && !isUserAdmin()) {
                    navigate('/401', {
                        replace: true,
                        state: {
                            nextPathname: app.link,
                            requireAdmin: app.requireAdmin,
                        },
                    });
                } else if (app.requireLogin && !isUserLoggedIn()) {
                    navigate('/login', {
                        replace: true,
                        state: {
                            nextPathname: app.link,
                            requireLogin: app.requireLogin,
                        },
                    });
                } else {
                    openFolder(app.id);
                }
            }

            return undefined;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, isMobile]);

    return (
        <>
            {!pathExists && <Navigate to='/404' />}
            {folderState.apps.map((app) => (
                // TODO If app.requireAuth === true <Redirect to='/401' />
                <Route
                    key={app.id}
                    path={isMobile ? app.link : '/*'}
                    element={
                        <>
                            {app.isOpen && !app.requireAuth && (
                                <Suspense
                                    fallback={<SpinnerApp global delay={200} />}
                                >
                                    {app.component}
                                </Suspense>
                            )}
                        </>
                    }
                />
            ))}
        </>
    );
};

export default FolderRoutes;
