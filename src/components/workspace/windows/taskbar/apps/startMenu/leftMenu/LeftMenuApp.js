import React, { useCallback, useRef } from 'react';

import { ICON_LOCATION, useFolderContext } from '../../../../../../../contexts/folderContext';
import { Container } from './style';
import WidgetApp from './WidgetApp';

const LeftMenuApp = () => {
    const {
        checkUserPermisions,
        folderState,
        sortByAppName,
    } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const widgetIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.windows.startMenu.left &&
                    checkUserPermisions(app) && (
                        <WidgetApp
                            key={app.id}
                            appId={app.id}
                            iconDisplayName={app.appName}
                            widgetIcon={app.widgetIcon}
                        />
                    )
            );
        });
    }, [checkUserPermisions]);

    return <Container>{widgetIcons()}</Container>;
};

export default LeftMenuApp;
