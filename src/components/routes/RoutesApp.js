import React, { useContext, Suspense, useEffect } from 'react';
import { GlobalAppContext } from '../../contexts/globalContext';
import { FolderContext, FOLDER_ACTIONS } from '../../contexts/folderContext';
import { Route } from 'react-router-dom';
import SpinnerApp from '../style/SpinnerApp';

const RoutesApp = () => {
    const { folderState, folderDispatch } = useContext(FolderContext);
    const { globalApp } = useContext(GlobalAppContext);
    const { isMobile } = globalApp;

    // Route paths are only for mobile
    // Here we check the url to see if it contains any paths and open the app if the url contains the route
    // For example https://example.com/docs if docs is in the url we open docs app
    useEffect(() => {
        const href = window.location.href;
        const regex = /^http[s]?:\/\/.*?(\/[a-zA-Z-_]+).*$/;
        let m;

        if ((m = regex.exec(href)) !== null) {
            m.forEach(match => {
                folderState.apps.map(item => {
                    if (match === item.link) {
                        folderDispatch({
                            type: FOLDER_ACTIONS.open,
                            id: item.id
                        });
                    }
                    return undefined;
                });
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            {folderState.apps.map(item => (
                <Route
                    key={item.id}
                    exact={isMobile ? true : false}
                    path={isMobile ? item.link : '/'}
                    render={() =>
                        item.isOpen === 'open' && (
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
