import React, { useState } from 'react';
import { Container, Widget } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WidgetApp from './WidgetApp';
import cogIcon from '../../../assets/images/icons/cog.svg';

const LeftMenuApp = () => {
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
            <Widget>
                <FontAwesomeIcon icon={['fas', 'power-off']} />
            </Widget>
        </Container>
    );
};

export default LeftMenuApp;
