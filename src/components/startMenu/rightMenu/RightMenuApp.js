import React, { useState } from 'react';
import { Container } from './style';
import Scrollbar from 'react-scrollbars-custom';
import WidgetApp from './WidgetApp';
import calcIcon from '../../../assets/images/icons/calculator.svg';
import docsIcon from '../../../assets/images/icons/docs.svg';
import storeIcon from '../../../assets/images/icons/store.svg';

const RightMenuApp = () => {
    const [widget] = useState([
        {
            iconDisplayName: 'Docs',
            widgetIcon: docsIcon,
            linkMobile: '/docs',
            appIndexName: 'docs',
            appMinimize: 'docsMinimize',
            appOpen: 'docsOpen'
        },
        {
            iconDisplayName: 'Store',
            widgetIcon: storeIcon,
            linkMobile: '/store',
            appIndexName: 'store',
            appMinimize: 'storeMinimize',
            appOpen: 'storeOpen'
        },
        {
            iconDisplayName: 'Calculator',
            widgetIcon: calcIcon,
            linkMobile: '/calculator',
            appIndexName: 'calculator',
            appMinimize: 'calculatorMinimize',
            appOpen: 'calculatorOpen'
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
                            iconDisplayName={item.iconDisplayName}
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
