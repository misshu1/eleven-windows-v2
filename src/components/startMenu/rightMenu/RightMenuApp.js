import React, { useCallback } from 'react';
import { useAppIconsContext } from '../../../contexts/appIconsContext';
import { Container } from './style';
import Scrollbar from 'react-scrollbars-custom';
import WidgetApp from './WidgetApp';

const RightMenuApp = () => {
    const { icons, ICON_LOCATION } = useAppIconsContext();

    const widgetIcons = useCallback(() => {
        return icons.map((item, index) => {
            return item.iconLocation.map(
                location =>
                    location === ICON_LOCATION.startMenuRight && (
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
                    )
            );
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
