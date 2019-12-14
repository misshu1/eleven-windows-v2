import React, { useContext, useCallback } from 'react';
import { useAppIconsContext } from '../../../contexts/appIconsContext';
import { Container, Widget } from './style';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import powerIcon from '../../../assets/images/icons/power-off.svg';
import WidgetApp from './WidgetApp';
import Tooltip from '@material-ui/core/Tooltip';

const LeftMenuApp = props => {
    const { closeApp } = useContext(TaskbarContext);
    const { icons, ICON_LOCATION } = useAppIconsContext();
    const { t } = useTranslation();

    const closeStartMenu = useCallback(() => {
        closeApp('startMenuOpen');
        props.history.push('/login');
    }, [closeApp, props.history]);

    const widgetIcons = useCallback(() => {
        return icons.map(item => {
            return item.iconLocation.map(
                location =>
                    location === ICON_LOCATION.startMenuLeft && (
                        <WidgetApp
                            key={item.appOpen}
                            iconDisplayName={item.iconDisplayName}
                            widgetIcon={item.widgetIcon}
                            appIndexName={item.appIndexName}
                            appMinimize={item.appMinimize}
                            appOpen={item.appOpen}
                        />
                    )
            );
        });
    }, [ICON_LOCATION.startMenuLeft, icons]);

    return (
        <Container>
            {widgetIcons()}
            <Tooltip
                title={t('tooltip.logout')}
                placement='top'
                enterDelay={500}
            >
                <Widget onClick={closeStartMenu}>
                    <img
                        src={powerIcon}
                        alt='login'
                        aria-label='login'
                        draggable='false'
                    />
                </Widget>
            </Tooltip>
        </Container>
    );
};

export default withRouter(LeftMenuApp);
