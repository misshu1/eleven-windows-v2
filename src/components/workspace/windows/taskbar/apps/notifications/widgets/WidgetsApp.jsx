import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { useDispatchFolderContext, useFolderContext } from 'contexts';
import { useNotificationsTaskbarContext } from '../../../contexts/notificationsTaskbarContext';
import { Container, Widget } from './style';
import { ScrollbarApp, ICON_LOCATION } from 'components/common';
import { Tooltip } from '@material-ui/core';

const WidgetsApp = () => {
    const {
        checkUserPermisions,
        folderState,
        sortByAppName
    } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const widgetIcons = () => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.windows.notificationsWindow &&
                    checkUserPermisions(app) && (
                        <WidgetApp
                            key={app.id}
                            appId={app.id}
                            iconDisplayName={app.appName}
                            widgetIcon={app.widgetIcon}
                        />
                    )
            );
        });
    };
    return (
        <ScrollbarApp style={{ height: '6.5rem' }}>
            <Container>{widgetIcons()}</Container>
        </ScrollbarApp>
    );
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
        <Tooltip title={iconDisplayName} placement='bottom' enterDelay={500}>
            <Widget onClick={start}>
                {widgetIcon}
                <h5>{iconDisplayName}</h5>
            </Widget>
        </Tooltip>
    );
};

WidgetApp.propTypes = {
    iconDisplayName: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    appId: PropTypes.number.isRequired
};

export default WidgetsApp;
