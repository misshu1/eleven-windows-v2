import React, { useState, useContext, useCallback } from 'react';
import { Container, Widget } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { Link } from 'react-router-dom';
import WidgetApp from './WidgetApp';
import cogIcon from '../../../assets/images/icons/cog.svg';

const LeftMenuApp = () => {
    const { closeApp } = useContext(TaskbarContext);
    const [widget] = useState([
        {
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
    }, [closeApp]);

    return (
        <Container>
            {widget.map(item => (
                <WidgetApp
                    key={item.appOpen}
                    widgetIcon={item.widgetIcon}
                    fontIcon={item.fontIcon}
                    appIndexName={item.appIndexName}
                    appMinimize={item.appMinimize}
                    appOpen={item.appOpen}
                    useWidgetIcon={item.useWidgetIcon}
                />
            ))}
            <Widget onClick={closeStartMenu}>
                <Link to='/login'>
                    <FontAwesomeIcon icon={['fas', 'power-off']} />
                </Link>
            </Widget>
        </Container>
    );
};

export default LeftMenuApp;
