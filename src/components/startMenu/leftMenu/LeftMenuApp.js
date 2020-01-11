import React, { useContext } from 'react';
import { FolderContext, ICON_LOCATION } from '../../../contexts/folderContext';
import { Container, Widget } from './style';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import WidgetApp from './WidgetApp';
import Tooltip from '@material-ui/core/Tooltip';
import PowerOffIcon from '../../../assets/images/icons/PowerOffIcon';

const LeftMenuApp = props => {
    const { folderState } = useContext(FolderContext);
    const { closeApp } = useContext(TaskbarContext);
    const { t } = useTranslation();

    const closeStartMenu = () => {
        closeApp('startMenuOpen');
        props.history.push('/login');
    };

    const widgetIcons = () => {
        return folderState.apps.map(item => {
            return item.iconLocation.map(
                location =>
                    location === ICON_LOCATION.startMenuLeft && (
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

    return (
        <Container>
            {widgetIcons()}
            <Tooltip
                title={t('tooltip.logout')}
                placement='top'
                enterDelay={500}
            >
                <Widget onClick={closeStartMenu}>
                    <PowerOffIcon width='2rem' height='2rem' />
                </Widget>
            </Tooltip>
        </Container>
    );
};

export default withRouter(LeftMenuApp);
