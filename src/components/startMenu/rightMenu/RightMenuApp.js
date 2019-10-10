import React, { useState } from 'react';
import { Container } from './style';
import WidgetApp from './WidgetApp';
import calc from '../../../assets/images/startmenu/calculator.png';

const RightMenuApp = () => {
    const [widget] = useState([
        {
            iconDisplayame: 'Calculator',
            widgetIcon: calc,
            linkMobile: '/calculator',
            appIndexName: 'calculatorIndex',
            appMinimize: 'calculatorMinimize',
            appOpen: 'calculatorOpen'
        }
    ]);

    return (
        <Container>
            {widget.map((item, index) => (
                <WidgetApp
                    animationDuration={(index + 1) / 10}
                    key={item.appOpen}
                    linkMobile={item.linkMobile}
                    widgetIcon={item.widgetIcon}
                    iconDisplayame={item.iconDisplayame}
                    appIndexName={item.appIndexName}
                    appMinimize={item.appMinimize}
                    appOpen={item.appOpen}
                />
            ))}
        </Container>
    );
};
export default RightMenuApp;
