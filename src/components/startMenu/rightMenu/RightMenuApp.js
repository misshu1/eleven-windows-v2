import React, { useCallback, useEffect, useContext } from 'react';
import { FolderContext, ICON_LOCATION } from '../../../contexts/folderContext';
import { Container } from './style';
import Scrollbar from 'react-scrollbars-custom';
import WidgetApp from './WidgetApp';

let ANIMATION_DURATION = 0;

const RightMenuApp = () => {
    const { folderState } = useContext(FolderContext);

    useEffect(() => {
        return () => {
            ANIMATION_DURATION = 0;
        };
    }, []);

    const widgetIcons = useCallback(() => {
        return folderState.apps.map(item => {
            return item.iconLocation.map(location => {
                if (location === ICON_LOCATION.startMenuRight) {
                    ANIMATION_DURATION++;
                    return (
                        <WidgetApp
                            animationDuration={ANIMATION_DURATION / 10}
                            key={item.id}
                            appId={item.id}
                            link={item.link}
                            widgetIcon={item.widgetIcon}
                            iconDisplayName={item.appName}
                        />
                    );
                }
                return undefined;
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
