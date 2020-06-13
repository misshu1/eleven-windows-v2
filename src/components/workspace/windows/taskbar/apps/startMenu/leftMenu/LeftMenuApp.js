import Tooltip from '@material-ui/core/Tooltip';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import PowerOffIcon from '../../../../../../../assets/images/icons/PowerOffIcon';
import { ICON_LOCATION, useFolderContext } from '../../../../../../../contexts/folderContext';
import { useNotificationsContext } from '../../../../../../../contexts/notificationsContext';
import { useAuth } from '../../../../../../../hooks/useAuth';
import { Container, Widget } from './style';
import WidgetApp from './WidgetApp';

const LeftMenuApp = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));
    const { showError } = useNotificationsContext();
    const { t } = useTranslation();
    const auth = useAuth();

    const handleLogOut = () => {
        auth.logout().catch((err) => showError('Error', err.message, 500));
    };

    const widgetIcons = () => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.windows.startMenu.left && (
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
        <Container>
            {widgetIcons()}
            {auth.user && (
                <Tooltip
                    title={t('tooltip.logout')}
                    placement='top'
                    enterDelay={500}
                >
                    <Widget onClick={handleLogOut}>
                        <PowerOffIcon width='2rem' height='2rem' />
                    </Widget>
                </Tooltip>
            )}
        </Container>
    );
};

export default LeftMenuApp;
