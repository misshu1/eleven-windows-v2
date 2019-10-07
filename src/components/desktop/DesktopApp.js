import React, { useContext, useState, memo } from 'react';
import { Desktop } from './style';
import { TaskbarContext } from '../../contexts/taskbarContext';
import IconContainer from './DesktopIconApp';
import folderIcon from '../../assets/images/desktop/folder-icon.png';

const DesktopApp = memo(props => {
    const { closeAllApps } = useContext(TaskbarContext);
    const [icons] = useState([
        {
            iconDisplayame: 'Settings',
            folderIcon: folderIcon,
            linkMobile: '/settings',
            appIndexName: 'settings',
            appMinimize: 'settingsMinimize',
            appOpen: 'settingsOpen'
        },
        {
            iconDisplayame: 'Readme',
            folderIcon: folderIcon,
            linkMobile: '/readme'
        }
    ]);

    return (
        <Desktop onClick={closeAllApps}>
            {icons.map(item => (
                <IconContainer
                    key={item.iconDisplayame}
                    iconName={item.iconDisplayame}
                    linkMobile={item.linkMobile}
                    folderIcon={item.folderIcon}
                    appIndexName={item.appIndexName}
                    appMinimize={item.appMinimize}
                    appOpen={item.appOpen}
                ></IconContainer>
            ))}
        </Desktop>
    );
});

export default DesktopApp;
