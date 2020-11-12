import PropTypes from 'prop-types';
import React from 'react';

import { useSettingsContext } from '../../../contexts/settingsContext';
import LinuxToolbar from './linux/LinuxToolbar';
import MobileToolbar from './mobile/MobileToolbar';
import WindowsToolbar from './windows/WindowsToolbar';

const FolderToolbar = (props) => {
    const {
        appId,
        quitApp,
        toolbarMenu,
        toggleDrawer,
        changePage,
        page
    } = props;
    const {
        isWindowsSelected,
        isLinuxSelected,
        isMobileSelected
    } = useSettingsContext();

    return (
        <>
            {isMobileSelected() && (
                <MobileToolbar
                    appId={appId}
                    toolbarMenu={toolbarMenu}
                    toggleDrawer={toggleDrawer}
                    changePage={changePage}
                    page={page}
                />
            )}
            {isWindowsSelected() && (
                <WindowsToolbar
                    appId={appId}
                    quitApp={quitApp}
                    toolbarMenu={toolbarMenu}
                    toggleDrawer={toggleDrawer}
                    changePage={changePage}
                    page={page}
                />
            )}
            {isLinuxSelected() && (
                <LinuxToolbar
                    appId={appId}
                    quitApp={quitApp}
                    toolbarMenu={toolbarMenu}
                    toggleDrawer={toggleDrawer}
                    changePage={changePage}
                    page={page}
                />
            )}
        </>
    );
};

export default FolderToolbar;

FolderToolbar.propTypes = {
    quitApp: PropTypes.func.isRequired,
    toolbarMenu: PropTypes.array,
    toggleDrawer: PropTypes.func
};
