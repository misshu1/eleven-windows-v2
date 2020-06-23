import Backdrop from '@material-ui/core/Backdrop';
import PropTypes from 'prop-types';
import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Scrollbar from 'react-scrollbars-custom';

import { useDispatchFolderContext, useFolderContext } from '../../contexts/folderContext';
import { useSettingsContext } from '../../contexts/settingsContext';
import useMediaQuery from '../../hooks/useMediaQuery';
import DrawerApp from './drawer/DrawerApp';
import { AnimateFadeInOut, Content, Folder } from './style';
import FolderToolbar from './toolbar/FolderToolbar';

const FolderApp = forwardRef((props, ref) => {
    const [close, setClose] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [disableDrag, setDisableDrag] = useState(false);
    const { folderState } = useFolderContext();
    const {
        closeFolder,
        activeFolder,
        minimizeDown,
    } = useDispatchFolderContext();
    const { isLinuxSelected } = useSettingsContext();

    const isMobile = useMediaQuery('(max-width: 450px)');
    const isTablet = useMediaQuery('(max-width: 800px)');
    const isSmallHeight = useMediaQuery('(max-height: 650px)');

    const {
        appId,
        children,
        height,
        width,
        marginLeft,
        marginTop,
        toolbarMenu,
    } = props;

    useEffect(() => {
        isMobile && setDisableDrag(true);
    }, [isMobile]);

    const quitApp = useCallback(() => {
        setClose(true);
        setTimeout(() => {
            closeFolder(appId);
        }, 200);
    }, [appId, closeFolder]);

    const minimize = useCallback(() => {
        minimizeDown(appId);
    }, [minimizeDown, appId]);

    const active = useCallback(() => {
        activeFolder(appId);
    }, [activeFolder, appId]);

    const toggleDrawer = useCallback(() => {
        setShowDrawer(!showDrawer);
    }, [showDrawer]);

    const closeDrawer = useCallback(() => {
        setShowDrawer(false);
    }, []);

    const defaultFolderPosition = useMemo(() => {
        const left = marginLeft ? marginLeft : 60;
        const top = marginTop ? marginTop : 60;

        const smallScreen = isSmallHeight || isMobile;

        return {
            x: isTablet ? 0 : left,
            y: smallScreen ? 0 : top,
        };
    }, [isMobile, isSmallHeight, isTablet, marginLeft, marginTop]);

    return ReactDOM.createPortal(
        <>
            {folderState.apps.map(
                (app) =>
                    app.id === appId && (
                        <Draggable
                            key={app.id}
                            axis='both'
                            handle='.handle' // The handle is in the 'toolbar' folder
                            disabled={disableDrag}
                            bounds='#desktop'
                            defaultPosition={defaultFolderPosition}
                        >
                            <AnimateFadeInOut
                                appIndex={app.appIndex}
                                onClick={active}
                                open={app.isOpen}
                                minimize={app.isMinimize}
                                close={close}
                            >
                                <Folder
                                    isLinuxSelected={isLinuxSelected()}
                                    className='folder' // This class is used in 'AnimateFadeInOut'
                                    width={width}
                                    height={height}
                                >
                                    <FolderToolbar
                                        toolbarMenu={toolbarMenu}
                                        folderName={app.appName}
                                        minimize={minimize}
                                        quitApp={quitApp}
                                        toggleDrawer={toggleDrawer}
                                    />
                                    <Content>
                                        {showDrawer && (
                                            <>
                                                <Backdrop
                                                    open={showDrawer}
                                                    style={{
                                                        zIndex: 500,
                                                        marginTop: isMobile
                                                            ? '3.5rem'
                                                            : '2.5rem',
                                                    }}
                                                    onClick={closeDrawer}
                                                />
                                                <DrawerApp
                                                    toolbarMenu={toolbarMenu}
                                                    closeDrawer={closeDrawer}
                                                    ref={ref}
                                                />
                                            </>
                                        )}
                                        <Scrollbar
                                            contentProps={{
                                                style: {
                                                    height: '100%',
                                                },
                                            }}
                                        >
                                            {children}
                                        </Scrollbar>
                                    </Content>
                                </Folder>
                            </AnimateFadeInOut>
                        </Draggable>
                    )
            )}
        </>,
        document.getElementById('desktop')
    );
});

export default FolderApp;

FolderApp.propTypes = {
    appId: PropTypes.number.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    marginTop: PropTypes.number,
    marginLeft: PropTypes.number,
    toolbarMenu: PropTypes.array,
};
