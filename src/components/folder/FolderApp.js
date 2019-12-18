import ReactDOM from 'react-dom';
import React, {
    useContext,
    useState,
    useEffect,
    useCallback,
    forwardRef
} from 'react';
import { Folder, Content, AnimateFadeInOut } from './style';
import { GlobalAppContext } from '../../contexts/globalContext';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { FolderContext } from '../../contexts/folderContext';
import { IndexContext } from '../../contexts/indexContext';
import FolderToolbar from './FolderToolbar';
import Scrollbar from 'react-scrollbars-custom';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import DrawerApp from './drawer/DrawerApp';
import Backdrop from '@material-ui/core/Backdrop';

const FolderApp = (props, ref) => {
    const [close, setClose] = useState('');
    const [showDrawer, setShowDrawer] = useState(false);
    const [handleDrag, setHandleDrag] = useState(false);
    const { folder, minimizeApp, closeApp } = useContext(FolderContext);
    const { activeWindow } = useContext(IndexContext);
    const { closeAllApps } = useContext(TaskbarContext);
    const { globalApp } = useContext(GlobalAppContext);
    const { isMobile } = globalApp;
    const {
        appOpen,
        appMinimize,
        appIndexName,
        appIndexValue,
        children,
        folderName,
        height,
        width,
        marginLeft,
        marginTop,
        toolbarMenu
    } = props;

    useEffect(() => {
        isMobile && setHandleDrag(true);
    }, [isMobile]);

    const quitApp = useCallback(() => {
        setClose('close');
        setTimeout(() => {
            closeApp(appOpen, appMinimize);
        }, 200);
    }, [closeApp, appMinimize, appOpen]);

    const minimize = useCallback(() => {
        minimizeApp(appMinimize, true);
    }, [minimizeApp, appMinimize]);

    const active = useCallback(() => {
        activeWindow(appIndexName);
    }, [activeWindow, appIndexName]);

    const closeTaskbarApps = useCallback(() => {
        closeAllApps();
    }, [closeAllApps]);

    const handleClick = useCallback(() => {
        closeTaskbarApps();
        active();
    }, [active, closeTaskbarApps]);

    const toggleDrawer = useCallback(() => {
        setShowDrawer(!showDrawer);
    }, [showDrawer]);

    const closeDrawer = useCallback(() => {
        setShowDrawer(false);
    }, []);

    return ReactDOM.createPortal(
        <Draggable axis='both' handle='.handle' disabled={handleDrag}>
            <AnimateFadeInOut
                appIndex={appIndexValue}
                onClick={handleClick}
                open={folder[appOpen]}
                minimize={folder[appMinimize]}
                close={close}
            >
                <Folder
                    className='folder'
                    width={width}
                    height={height}
                    marginTop={marginTop}
                    marginLeft={marginLeft}
                >
                    <FolderToolbar
                        toolbarMenu={toolbarMenu}
                        folderName={folderName}
                        minimize={minimize}
                        quitApp={quitApp}
                        toggleDrawer={toggleDrawer}
                    />
                    <Content>
                        <Backdrop
                            open={showDrawer}
                            style={{ zIndex: 500 }}
                            onClick={closeDrawer}
                        ></Backdrop>
                        {showDrawer && (
                            <DrawerApp
                                toolbarMenu={toolbarMenu}
                                closeDrawer={closeDrawer}
                                ref={ref}
                            />
                        )}
                        <Scrollbar style={{ width: '100%', height: '100%' }}>
                            {children}
                        </Scrollbar>
                    </Content>
                </Folder>
            </AnimateFadeInOut>
        </Draggable>,
        document.querySelector('#desktop')
    );
};
export default forwardRef(FolderApp);

FolderApp.propTypes = {
    appOpen: PropTypes.string.isRequired,
    appMinimize: PropTypes.string.isRequired,
    appIndexName: PropTypes.string.isRequired,
    appIndexValue: PropTypes.number.isRequired,
    folderName: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    marginTop: PropTypes.string,
    marginLeft: PropTypes.string
};
