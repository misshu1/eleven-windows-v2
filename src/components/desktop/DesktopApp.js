import React, { useContext, useState, useCallback } from 'react';
import { Desktop } from './style';
import { TaskbarContext } from '../../contexts/taskbarContext';
import IconContainer from './DesktopIconApp';
import cogIcon from '../../assets/images/icons/cog.svg';
import docsIcon from '../../assets/images/icons/docs.svg';
import storeIcon from '../../assets/images/icons/store.svg';

const DesktopApp = () => {
    const { closeAllApps } = useContext(TaskbarContext);
    const [icons] = useState([
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
            iconDisplayName: 'Settings',
            widgetIcon: cogIcon,
            linkMobile: '/settings',
            appIndexName: 'settings',
            appMinimize: 'settingsMinimize',
            appOpen: 'settingsOpen'
        }
    ]);

    const close = useCallback(() => {
        closeAllApps();
    }, [closeAllApps]);

    return (
        <Desktop onClick={close}>
            {icons.map(item => (
                <IconContainer
                    key={item.iconDisplayName}
                    iconName={item.iconDisplayName}
                    linkMobile={item.linkMobile}
                    widgetIcon={item.widgetIcon}
                    appIndexName={item.appIndexName}
                    appMinimize={item.appMinimize}
                    appOpen={item.appOpen}
                />
            ))}
        </Desktop>
    );
};

export default DesktopApp;
