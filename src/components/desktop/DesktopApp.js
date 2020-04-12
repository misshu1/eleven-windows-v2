import React, { useCallback, useRef } from 'react';

import { ICON_LOCATION, useFolderContext } from '../../contexts/folderContext';
import IconContainer from './DesktopIconApp';
import { Desktop } from './style';

const DesktopApp = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const desktopIcons = useCallback(() => {
        return apps.current.map(app => {
            return app.iconLocation.map(
                location =>
                    location === ICON_LOCATION.desktop && (
                        <IconContainer
                            key={app.id}
                            appId={app.id}
                            iconName={app.appName}
                            link={app.link}
                            widgetIcon={app.widgetIcon}
                        />
                    )
            );
        });
    }, []);

    return <Desktop>{desktopIcons()}</Desktop>;
};

export default DesktopApp;
