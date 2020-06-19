import React, { useCallback, useRef } from 'react';
import Scrollbar from 'react-scrollbars-custom';

import { ICON_LOCATION, useFolderContext } from '../../../../../../contexts/folderContext';
import { useSideMenuContext } from '../../../contexts/sideMenuContext';
import MenuAppIcon from './MenuAppIcon';
import { Container } from './style';

const AppsPreview = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const { closeSideMenu } = useSideMenuContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const menuIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.linux.appsMenu && (
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
    }, [closeSideMenu]);

    return (
        <>
            <Container>
                <Scrollbar>
                    <div className='apps-container'>{menuIcons()}</div>
                </Scrollbar>
            </Container>
        </>
    );
};

export default AppsPreview;
