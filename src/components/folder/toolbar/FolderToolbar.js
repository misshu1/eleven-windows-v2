import PropTypes from 'prop-types';
import React from 'react';

import { useSettingsContext } from '../../../contexts/settingsContext';
import useMediaQuery from '../../../hooks/useMediaQuery';
import LinuxToolbar from './linux/LinuxToolbar';
import WindowsToolbar from './windows/WindowsToolbar';

const FolderToolbar = (props) => {
    const { folderName, minimize, quitApp, toolbarMenu, toggleDrawer } = props;
    const { isWindowsSelected, isLinuxSelected } = useSettingsContext();
    const isMobile = useMediaQuery('(max-width: 450px)');

    return (
        <>
            {isMobile && <div>mobile</div>}
            {!isMobile && isWindowsSelected() && (
                <WindowsToolbar
                    folderName={folderName}
                    minimize={minimize}
                    quitApp={quitApp}
                    toolbarMenu={toolbarMenu}
                    toggleDrawer={toggleDrawer}
                />
            )}
            {!isMobile && isLinuxSelected() && (
                <LinuxToolbar
                    folderName={folderName}
                    minimize={minimize}
                    quitApp={quitApp}
                    toolbarMenu={toolbarMenu}
                    toggleDrawer={toggleDrawer}
                />
            )}
        </>
    );
};

export default FolderToolbar;

FolderToolbar.propTypes = {
    folderName: PropTypes.string.isRequired,
    minimize: PropTypes.func.isRequired,
    quitApp: PropTypes.func.isRequired,
    toolbarMenu: PropTypes.array,
    toggleDrawer: PropTypes.func,
};
