import React, { useContext, useState, useCallback } from 'react';
import { Desktop } from './style';
import { TaskbarContext } from '../../contexts/taskbarContext';
import IconContainer from './DesktopIconApp';
import settingsIcon from '../../assets/images/icons/cog.svg';
import docsIcon from '../../assets/images/icons/docs.svg';

const DesktopApp = () => {
    const { closeAllApps } = useContext(TaskbarContext);
    const [icons] = useState([
        {
            iconDisplayName: 'Settings',
            folderIcon: settingsIcon,
            linkMobile: '/settings',
            appIndexName: 'settings',
            appMinimize: 'settingsMinimize',
            appOpen: 'settingsOpen'
        },
        {
            iconDisplayName: 'Docs',
            folderIcon: docsIcon,
            linkMobile: '/docs',
            appIndexName: 'docs',
            appMinimize: 'docsMinimize',
            appOpen: 'docsOpen'
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
                    folderIcon={item.folderIcon}
                    appIndexName={item.appIndexName}
                    appMinimize={item.appMinimize}
                    appOpen={item.appOpen}
                />
            ))}
        </Desktop>
    );
};

export default DesktopApp;
