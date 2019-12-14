import React, { useCallback, useEffect } from 'react';
import { useAppIconsContext } from '../../../contexts/appIconsContext';
import { Container } from './style';
import Scrollbar from 'react-scrollbars-custom';
import WidgetApp from './WidgetApp';

let ANIMATION_DURATION = 0;

const RightMenuApp = () => {
    const { icons, ICON_LOCATION } = useAppIconsContext();

    useEffect(() => {
        return () => {
            ANIMATION_DURATION = 0;
        };
    }, []);

    const widgetIcons = useCallback(() => {
        return icons.map(item => {
            return item.iconLocation.map(location => {
                if (location === ICON_LOCATION.startMenuRight) {
                    ANIMATION_DURATION++;
                    return (
                        <WidgetApp
                            animationDuration={ANIMATION_DURATION / 10}
                            key={item.appOpen}
                            linkMobile={item.linkMobile}
                            widgetIcon={item.widgetIcon}
                            iconDisplayName={item.iconDisplayName}
                            appIndexName={item.appIndexName}
                            appMinimize={item.appMinimize}
                            appOpen={item.appOpen}
                        />
                    );
                }
                return undefined;
            });
        });
    }, [ICON_LOCATION.startMenuRight, icons]);

    return (
        <Container>
            <Scrollbar style={{ width: '100%', height: '100%' }}>
                <div style={{ marginLeft: '.1rem', width: '99%' }}>
                    {widgetIcons()}
                </div>
            </Scrollbar>
        </Container>
    );
};
export default RightMenuApp;
