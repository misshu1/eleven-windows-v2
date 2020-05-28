import React, { useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';

import { ICON_LOCATION, useFolderContext } from '../../../../contexts/folderContext';
import DesktopIconApp from './DesktopIconApp';
import { Desktop } from './style';

const DesktopWindowsApp = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const desktopIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.windows.desktop && (
                        <DesktopIconApp
                            key={app.id}
                            appId={app.id}
                            iconName={app.appName}
                            widgetIcon={app.widgetIcon}
                        />
                    )
            );
        });
    }, []);
    return ReactDOM.createPortal(
        <Desktop>{desktopIcons()}</Desktop>,
        document.querySelector('#desktop')
    );
};

export default DesktopWindowsApp;
