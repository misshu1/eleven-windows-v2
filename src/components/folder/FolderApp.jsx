import Backdrop from '@material-ui/core/Backdrop';
import PropTypes from 'prop-types';
import React, {
    forwardRef,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import {
    useDispatchFolderContext,
    useFolderContext,
    useSettingsContext
} from 'contexts';
import { useFolderScroll, useMediaQuery } from 'hooks';
import { ScrollbarApp } from 'components/common';
import { DrawerApp } from './drawer/DrawerApp';
import { AnimateFadeInOut, Content, Folder } from './style';
import FolderToolbar from './toolbar/FolderToolbar';
import { zIndex } from 'components/theme/zIndex';

const FolderContent = (props) => {
    const { children, scrollTop, setScrollTop } = props;

    useFolderScroll(scrollTop, setScrollTop);

    return <>{children}</>;
};

const FolderApp = forwardRef((props, ref) => {
    const [close, setClose] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [disableDrag, setDisableDrag] = useState(false);
    const { isLinuxSelected } = useSettingsContext();
    const { closeFolder, activeFolder } = useDispatchFolderContext();
    const { getFolder, isFolderActive } = useFolderContext();
    const draggableFirstChildRef = useRef(null);

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
        enablePagination
    } = props;

    const app = getFolder(appId);

    useEffect(() => {
        if (isMobile || app.isMaximize) {
            setDisableDrag(true);
        } else {
            setDisableDrag(false);
        }
    }, [app, isMobile]);

    const quitApp = useCallback(() => {
        setClose(true);
        setTimeout(() => {
            closeFolder(appId);
        }, 200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
            y: smallScreen ? 0 : top
        };
    }, [isMobile, isSmallHeight, isTablet, marginLeft, marginTop]);

    return ReactDOM.createPortal(
        <>
            <Draggable
                key={app.id}
                axis='both'
                handle='.handle' // The handle is in the 'toolbar' folder
                disabled={disableDrag}
                bounds='#desktop'
                defaultPosition={defaultFolderPosition}
                nodeRef={draggableFirstChildRef}
            >
                <AnimateFadeInOut
                    isActive={isFolderActive(app.id)}
                    appIndex={app.appIndex}
                    open={app.isOpen}
                    minimize={app.isMinimize}
                    close={close}
                    isMaximize={app.isMaximize}
                    width={width}
                    height={height}
                    ref={draggableFirstChildRef}
                >
                    <Folder
                        isLinuxSelected={isLinuxSelected()}
                        className='folder' // This class is used in 'AnimateFadeInOut'
                        width={width}
                        height={height}
                        isMaximize={app.isMaximize}
                        onMouseDown={active}
                    >
                        <FolderToolbar
                            appId={appId}
                            toolbarMenu={toolbarMenu}
                            quitApp={quitApp}
                            toggleDrawer={toggleDrawer}
                            enablePagination={enablePagination}
                        />
                        <Content>
                            {showDrawer && (
                                <>
                                    <Backdrop
                                        open={showDrawer}
                                        style={{
                                            zIndex:
                                                zIndex.folder.drawerBackdrop,
                                            marginTop: isMobile
                                                ? '3.5rem'
                                                : '2.5rem'
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
                            <ScrollbarApp
                            //  requireChildrenProps
                            >
                                {/* <FolderContent> */}
                                {children}
                                {/* </FolderContent> */}
                            </ScrollbarApp>
                        </Content>
                    </Folder>
                </AnimateFadeInOut>
            </Draggable>
        </>,
        document.getElementById('desktop')
    );
});

export default FolderApp;

FolderApp.displayName = 'FolderApp';

FolderApp.propTypes = {
    appId: PropTypes.number.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    marginTop: PropTypes.number,
    marginLeft: PropTypes.number,
    toolbarMenu: PropTypes.array
};
