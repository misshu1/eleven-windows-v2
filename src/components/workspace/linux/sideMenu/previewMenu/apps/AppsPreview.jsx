import React, { useCallback, useRef } from 'react';

import { useFolderContext } from 'contexts';
import { ICON_LOCATION, ScrollbarApp } from 'components/common';
import { useSideMenuContext } from '../../../contexts/sideMenuContext';
import MenuAppIcon from './MenuAppIcon';
import { Container } from './style';

const AppsPreview = () => {
    const {
        checkUserPermisions,
        folderState,
        sortByAppName
    } = useFolderContext();
    const { closeSideMenu } = useSideMenuContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const menuIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.linux.appsMenu &&
                    checkUserPermisions(app) && (
                        <MenuAppIcon
                            key={app.id}
                            appId={app.id}
                            iconName={app.appName}
                            link={app.link}
                            widgetIcon={app.widgetIcon}
                            closeSideMenu={closeSideMenu}
                        />
                    )
            );
        });
    }, [checkUserPermisions, closeSideMenu]);

    return (
        <ScrollbarApp>
            <Container>{menuIcons()}</Container>
        </ScrollbarApp>
    );
};

export default AppsPreview;
