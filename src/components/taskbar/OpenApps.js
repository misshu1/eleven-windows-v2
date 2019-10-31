import React, { useContext } from 'react';
import { OpenAppsContainer, AppIcon } from './style';
import { FolderContext } from '../../contexts/FolderContext';
import { IndexContext } from '../../contexts/indexContext';

const OpenApps = () => {
    const { folder, minimizeApp } = useContext(FolderContext);
    const { index, activeWindow } = useContext(IndexContext);

    const showIcons = () => {
        const { openApps } = folder;
        const create = openApps.map(item => {
            const app = item[0];
            const icon = item[1];
            const zIndex = item[2];
            const minimize = item[3];

            return (
                <AppIcon
                    key={app}
                    minimize={folder[minimize]}
                    onClick={() => {
                        if (folder[minimize] === true) {
                            minimizeApp(minimize, false);
                        } else if (
                            folder[minimize] !== true &&
                            index[zIndex] !== 100
                        ) {
                            minimizeApp(minimize, true);
                        }
                        activeWindow(zIndex);
                    }}
                    appIndex={index[zIndex]}
                >
                    <img src={icon} alt={app} draggable='false' />
                </AppIcon>
            );
        });
        return create;
    };

    return <OpenAppsContainer>{showIcons()}</OpenAppsContainer>;
};

export default OpenApps;
