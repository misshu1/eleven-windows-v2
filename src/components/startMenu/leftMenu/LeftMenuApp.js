import React, { useState, useContext, useCallback } from 'react';
import { Container, Widget } from './style';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import WidgetApp from './WidgetApp';
import Tooltip from '@material-ui/core/Tooltip';
import cogIcon from '../../../assets/images/icons/cog.svg';
import powerIcon from '../../../assets/images/icons/power-off.svg';

const LeftMenuApp = props => {
    const { closeApp } = useContext(TaskbarContext);
    const { t } = useTranslation();
    const [widget] = useState([
        {
            iconDisplayName: 'Settings',
            useWidgetIcon: true,
            widgetIcon: cogIcon,
            fontIcon: ['fas', 'cog'],
            appIndexName: 'settings',
            appMinimize: 'settingsMinimize',
            appOpen: 'settingsOpen'
        }
    ]);

    const closeStartMenu = useCallback(() => {
        closeApp('startMenuOpen');
        props.history.push('/login');
    }, [closeApp, props.history]);

    return (
        <Container>
            {widget.map(item => (
                <WidgetApp
                    key={item.appOpen}
                    iconDisplayName={item.iconDisplayName}
                    widgetIcon={item.widgetIcon}
                    fontIcon={item.fontIcon}
                    appIndexName={item.appIndexName}
                    appMinimize={item.appMinimize}
                    appOpen={item.appOpen}
                    useWidgetIcon={item.useWidgetIcon}
                />
            ))}
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
