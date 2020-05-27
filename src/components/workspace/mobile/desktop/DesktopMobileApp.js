import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

import { ICON_LOCATION, useFolderContext } from '../../../../contexts/folderContext';
import { Desktop, IconContainer } from './style';

const DesktopIconApp = (props) => {
    const { link, widgetIcon, iconName } = props;

    return (
        <IconContainer>
            <Link to={link}>
                {widgetIcon}
                <div>{iconName}</div>
            </Link>
        </IconContainer>
    );
};

const DesktopMobileApp = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const desktopIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.mobile.homeScreen && (
                        <DesktopIconApp
                            key={app.id}
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

export default DesktopMobileApp;
