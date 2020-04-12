import Tooltip from '@material-ui/core/Tooltip';
import React, { useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import PowerOffIcon from '../../../assets/images/icons/PowerOffIcon';
import { ICON_LOCATION, useFolderContext } from '../../../contexts/folderContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { Container, Widget } from './style';
import WidgetApp from './WidgetApp';

const LeftMenuApp = (props) => {
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));
    const { closeApp } = useContext(TaskbarContext);
    const { t } = useTranslation();

    const goToLogin = () => {
        closeApp('startMenuOpen');
        props.history.push('/login');
    };

    const widgetIcons = () => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.startMenuLeft && (
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
            <Tooltip
                title={t('tooltip.logout')}
                placement='top'
                enterDelay={500}
            >
                <Widget onClick={goToLogin}>
                    <PowerOffIcon width='2rem' height='2rem' />
                </Widget>
            </Tooltip>
        </Container>
    );
};

export default withRouter(LeftMenuApp);
