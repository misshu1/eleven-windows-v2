import React, { useContext, useState } from 'react';
import { Desktop } from './style';
import { TaskbarContext } from '../../contexts/taskbarContext';
import IconContainer from './DesktopIconApp';
import folderIcon from '../../assets/images/desktop/folder-icon.png';

const DesktopApp = props => {
    const { closeAllApps } = useContext(TaskbarContext);
    const [icons] = useState([
        {
            name: 'Settings',
            appName: 'settings',
            folderIcon: folderIcon,
            linkMobile: '/settings',
            appIndexName: 'settings',
            appMinimize: 'settingsMinimize',
            appOpen: 'settingsOpen'
        },
        {
            name: 'Readme',
            appName: 'readme',
            folderIcon: folderIcon,
            linkMobile: '/readme'
        }
    ]);

    return (
        <Desktop
            onClick={() => {
                closeAllApps();
            }}
        >
            {icons.map(item => (
                <IconContainer
                    key={item.name}
                    iconName={item.name}
                    linkMobile={item.linkMobile}
                    folderIcon={item.folderIcon}
                    appIndexName={item.appIndexName}
                    appMinimize={item.appMinimize}
                    appOpen={item.appOpen}
                ></IconContainer>
            ))}
        </Desktop>
    );
};

export default DesktopApp;
