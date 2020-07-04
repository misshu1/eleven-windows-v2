import PropTypes from 'prop-types';
import React from 'react';

import { useSettingsContext } from '../../../contexts/settingsContext';
import LinuxToolbar from './linux/LinuxToolbar';
import MobileToolbar from './mobile/MobileToolbar';
import WindowsToolbar from './windows/WindowsToolbar';

const FolderToolbar = (props) => {
    const {
        folderName,
        minimize,
        quitApp,
        toolbarMenu,
        toggleDrawer,
        setPage,
        page,
    } = props;
    const {
        isWindowsSelected,
        isLinuxSelected,
        isMobileSelected,
    } = useSettingsContext();

    return (
        <>
            {isMobileSelected() && (
                <MobileToolbar
                    folderName={folderName}
                    toolbarMenu={toolbarMenu}
                    toggleDrawer={toggleDrawer}
                    setPage={setPage}
                    page={page}
                />
            )}
            {isWindowsSelected() && (
                <WindowsToolbar
                    folderName={folderName}
                    minimize={minimize}
                    quitApp={quitApp}
                    toolbarMenu={toolbarMenu}
                    toggleDrawer={toggleDrawer}
                    setPage={setPage}
                    page={page}
                />
            )}
            {isLinuxSelected() && (
                <LinuxToolbar
                    folderName={folderName}
                    minimize={minimize}
                    quitApp={quitApp}
                    toolbarMenu={toolbarMenu}
                    toggleDrawer={toggleDrawer}
                    setPage={setPage}
                    page={page}
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
