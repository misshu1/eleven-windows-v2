import React, { useRef } from 'react';

import { ICON_LOCATION, useFolderContext } from '../../../../../../../contexts/folderContext';
import { Container } from './style';
import WidgetApp from './WidgetApp';

const LeftMenuApp = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const widgetIcons = () => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.windows.startMenu.left && (
                        <WidgetApp
                            key={app.id}
                            appId={app.id}
                            iconDisplayName={app.appName}
                            widgetIcon={app.widgetIcon}
                        />
                    )
            );
        });
    };

    return <Container>{widgetIcons()}</Container>;
};

export default LeftMenuApp;
