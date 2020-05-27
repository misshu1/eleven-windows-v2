import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { ICON_LOCATION, useDispatchFolderContext, useFolderContext } from '../../../../../../../contexts/folderContext';
import { useNotificationsTaskbarContext } from '../../../contexts/notificationsTaskbarContext';
import { Container, Widget } from './style';

const WidgetsApp = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const widgetIcons = () => {
        return apps.current.map((item) => {
            return item.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.windows.notificationsWindow && (
                        <WidgetApp
                            key={item.id}
                            appId={item.id}
                            iconDisplayName={item.appName}
                            widgetIcon={item.widgetIcon}
                        />
                    )
            );
        });
    };
    return <Container>{widgetIcons()}</Container>;
};

const WidgetApp = ({ iconDisplayName, widgetIcon, appId }) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { closeNotificationMenu } = useNotificationsTaskbarContext();

    const open = useRef(null);
    const active = useRef(null);
    const minimize = useRef(null);
    open.current = () => openFolder(appId);
    active.current = () => activeFolder(appId);
    minimize.current = () => minimizeUp(appId);

    const start = () => {
        open.current();
        active.current();
        minimize.current();
        closeNotificationMenu();
    };

    return (
        <Widget onClick={start}>
            {widgetIcon}
            <h5>{iconDisplayName}</h5>
        </Widget>
    );
};

WidgetApp.propTypes = {
    iconDisplayName: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    appId: PropTypes.number.isRequired,
};

export default WidgetsApp;
