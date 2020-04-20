import React, { useCallback, useEffect, useRef } from 'react';
import Scrollbar from 'react-scrollbars-custom';

import { Container } from './style';
import WidgetApp from './WidgetApp';
import {
    useFolderContext,
    ICON_LOCATION,
} from '../../../../../../../contexts/folderContext';

let ANIMATION_DURATION = 0;

const RightMenuApp = ({ closeStartMenu }) => {
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    useEffect(() => {
        return () => {
            ANIMATION_DURATION = 0;
        };
    }, []);

    const widgetIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map((location) => {
                if (location === ICON_LOCATION.startMenuRight) {
                    ANIMATION_DURATION++;
                    return (
                        <WidgetApp
                            key={app.id}
                            animationDuration={ANIMATION_DURATION / 10}
                            appId={app.id}
                            link={app.link}
                            widgetIcon={app.widgetIcon}
                            iconDisplayName={app.appName}
                            closeStartMenu={closeStartMenu}
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
