import React, { useCallback, useEffect, useRef } from 'react';

import { ICON_LOCATION, useFolderContext } from '../../../../../../../contexts/folderContext';
import { Container } from './style';
import WidgetApp from './WidgetApp';

let ANIMATION_DURATION = 0;

const RightMenuApp = () => {
    const {
        checkUserPermisions,
        folderState,
        sortByAppName,
    } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    useEffect(() => {
        return () => {
            ANIMATION_DURATION = 0;
        };
    }, []);

    const widgetIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map((location) => {
                if (location === ICON_LOCATION.windows.startMenu.right) {
                    ANIMATION_DURATION++;
                    return (
                        checkUserPermisions(app) && (
                            <WidgetApp
                                key={app.id}
                                animationDuration={ANIMATION_DURATION / 10}
                                appId={app.id}
                                widgetIcon={app.widgetIcon}
                                iconDisplayName={app.appName}
                            />
                        )
                    );
                }
                return undefined;
            });
        });
    }, [checkUserPermisions]);

    return <Container>{widgetIcons()}</Container>;
};
export default RightMenuApp;
