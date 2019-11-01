import React, { useState } from 'react';
import { Container } from './style';
import WidgetApp from './WidgetApp';
import calcIcon from '../../../assets/images/icons/calculator.svg';
import docsIcon from '../../../assets/images/icons/docs.svg';
import Scrollbar from 'react-scrollbars-custom';

const RightMenuApp = () => {
    const [widget] = useState([
        {
            iconDisplayame: 'Calculator',
            widgetIcon: calcIcon,
            linkMobile: '/calculator',
            appIndexName: 'calculator',
            appMinimize: 'calculatorMinimize',
            appOpen: 'calculatorOpen'
        },
        {
            iconDisplayame: 'Documentation',
            widgetIcon: docsIcon,
            linkMobile: '/docs',
            appIndexName: 'docs',
            appMinimize: 'docsMinimize',
            appOpen: 'docsOpen'
        }
    ]);

    return (
        <Container>
            <Scrollbar style={{ width: '100%', height: '100%' }}>
                <div style={{ marginLeft: '.1rem', width: '99%' }}>
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
                </div>
            </Scrollbar>
        </Container>
    );
};
export default RightMenuApp;
