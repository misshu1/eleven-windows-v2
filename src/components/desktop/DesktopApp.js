import React, { useContext, useCallback } from 'react';
import { useAppIconsContext } from '../../contexts/appIconsContext';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { Desktop } from './style';
import IconContainer from './DesktopIconApp';

const DesktopApp = () => {
    const { icons, ICON_LOCATION } = useAppIconsContext();
    const { closeAllApps } = useContext(TaskbarContext);

    const close = useCallback(() => {
        closeAllApps();
    }, [closeAllApps]);

    const desktopIcons = useCallback(() => {
        return icons.map(item => {
            return item.iconLocation.map(
                location =>
                    location === ICON_LOCATION.desktop && (
                        <IconContainer
                            key={item.iconDisplayName}
                            iconName={item.iconDisplayName}
                            linkMobile={item.linkMobile}
                            widgetIcon={item.widgetIcon}
                            appIndexName={item.appIndexName}
                            appMinimize={item.appMinimize}
                            appOpen={item.appOpen}
                        />
                    )
            );
        });
    }, [ICON_LOCATION.desktop, icons]);

    return <Desktop onClick={close}>{desktopIcons()}</Desktop>;
};

export default DesktopApp;
