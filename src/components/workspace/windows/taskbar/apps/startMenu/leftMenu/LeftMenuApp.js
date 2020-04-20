import Tooltip from '@material-ui/core/Tooltip';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import PowerOffIcon from '../../../../../../../assets/images/icons/PowerOffIcon';
import { ICON_LOCATION, useFolderContext } from '../../../../../../../contexts/folderContext';
import { useStartMenuContext } from '../../../contexts/startMenuContext';
import { Container, Widget } from './style';
import WidgetApp from './WidgetApp';

const LeftMenuApp = ({ history }) => {
    const { folderState, sortByAppName } = useFolderContext();
    const { closeStartMenu } = useStartMenuContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));
    const { t } = useTranslation();

    const goToLogin = () => {
        closeStartMenu();
        history.push('/login');
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
