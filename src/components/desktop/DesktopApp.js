import React, { useContext, useCallback } from 'react';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { Desktop } from './style';
import IconContainer from './DesktopIconApp';
import { FolderContext, ICON_LOCATION } from '../../contexts/folderContext';

const DesktopApp = () => {
    const { closeAllApps } = useContext(TaskbarContext);
    const { folderState } = useContext(FolderContext);

    const close = useCallback(() => {
        closeAllApps();
    }, [closeAllApps]);

    const desktopIcons = useCallback(() => {
        return folderState.apps.map(item => {
            return item.iconLocation.map(
                location =>
                    location === ICON_LOCATION.desktop && (
                        <IconContainer
                            key={item.id}
                            appId={item.id}
                            iconName={item.appName}
                            link={item.link}
                            widgetIcon={item.widgetIcon}
                        />
                    )
            );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Desktop onClick={close}>{desktopIcons()}</Desktop>;
};

export default DesktopApp;
