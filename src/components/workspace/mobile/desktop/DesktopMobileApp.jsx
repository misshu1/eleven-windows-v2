import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useFolderContext } from 'contexts';
import Clock from './Clock';
import { Container, Desktop, IconContainer } from './style';
import { ICON_LOCATION } from 'components/common';

const DesktopIconApp = (props) => {
    const { link, widgetIcon, iconName } = props;

    return (
        <IconContainer>
            <Link to={link}>
                {widgetIcon}
                <div className='app-name'>{iconName}</div>
            </Link>
        </IconContainer>
    );
};

const DesktopMobileApp = () => {
    const {
        checkUserPermisions,
        folderState,
        sortByAppName
    } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const desktopIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.mobile.homeScreen &&
                    checkUserPermisions(app) && (
                        <DesktopIconApp
                            key={app.id}
                            iconName={app.appName}
                            link={app.link}
                            widgetIcon={app.widgetIcon}
                        />
                    )
            );
        });
    }, [checkUserPermisions]);

    return (
        <Container>
            <Clock />
            <Desktop>{desktopIcons()}</Desktop>
        </Container>
    );
};

export default DesktopMobileApp;
