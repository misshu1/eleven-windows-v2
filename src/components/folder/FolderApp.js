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
import { FolderContext, FOLDER_ACTIONS } from '../../contexts/folderContext';
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
    const { folderState, folderDispatch } = useContext(FolderContext);

    const { closeAllApps } = useContext(TaskbarContext);
    const { globalApp } = useContext(GlobalAppContext);
    const { isMobile } = globalApp;
    const {
        appId,
        children,
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
            folderDispatch({
                type: FOLDER_ACTIONS.close,
                id: appId
            });
        }, 200);
    }, [folderDispatch, appId]);

    const minimize = useCallback(() => {
        folderDispatch({
            type: FOLDER_ACTIONS.minimize,
            id: appId,
            boolean: true
        });
    }, [folderDispatch, appId]);

    const active = useCallback(() => {
        folderDispatch({
            type: FOLDER_ACTIONS.active,
            id: appId
        });
    }, [folderDispatch, appId]);

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
        <>
            {folderState.apps.map(
                item =>
                    item.id === props.appId && (
                        <Draggable
                            key={item.id}
                            axis='both'
                            handle='.handle'
                            disabled={handleDrag}
                        >
                            <AnimateFadeInOut
                                appIndex={item.appIndex}
                                onClick={handleClick}
                                open={item.isOpen}
                                minimize={item.isMinimize}
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
                                        folderName={item.appName}
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
                                        <Scrollbar
                                            style={{
                                                width: '100%',
                                                height: '100%'
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
        document.querySelector('#desktop')
    );
};
export default forwardRef(FolderApp);

FolderApp.propTypes = {
    appId: PropTypes.number.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    marginTop: PropTypes.string,
    marginLeft: PropTypes.string,
    toolbarMenu: PropTypes.object
};
