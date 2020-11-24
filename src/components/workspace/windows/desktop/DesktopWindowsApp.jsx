import React, { useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';

import { useFolderContext } from 'contexts';
import DesktopIconApp from './DesktopIconApp';
import { Desktop } from './style';
import { ICON_LOCATION } from 'components/common';

const DesktopWindowsApp = () => {
    const {
        folderState,
        sortByAppName,
        checkUserPermisions
    } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const desktopIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.windows.desktop &&
                    checkUserPermisions(app) && (
                        <DesktopIconApp
                            key={app.id}
                            appId={app.id}
                            iconName={app.appName}
                            widgetIcon={app.widgetIcon}
                        />
                    )
            );
        });
    }, [checkUserPermisions]);

    return ReactDOM.createPortal(
        <Desktop>{desktopIcons()}</Desktop>,
        document.getElementById('desktop')
    );
};

export default DesktopWindowsApp;
