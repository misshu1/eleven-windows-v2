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
import { FolderContext } from '../../contexts/folderContext';
import FolderToolbar from './FolderToolbar';
import Scrollbar from 'react-scrollbars-custom';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import DrawerApp from './drawer/DrawerApp';
import Backdrop from '@material-ui/core/Backdrop';

const FolderApp = forwardRef((props, ref) => {
    const [close, setClose] = useState('');
    const [showDrawer, setShowDrawer] = useState(false);
    const [handleDrag, setHandleDrag] = useState(false);
    const { folderState, closeFolder, activeFolder, minimizeDown } = useContext(
        FolderContext
    );

    const {
        globalApp: { isMobile }
    } = useContext(GlobalAppContext);
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
            closeFolder(appId);
        }, 200);
    }, [appId, closeFolder]);

    const minimize = useCallback(() => {
        minimizeDown(appId);
    }, [minimizeDown, appId]);

    const active = useCallback(() => {
        activeFolder(appId);
    }, [activeFolder, appId]);

    const handleClick = useCallback(() => {
        active();
    }, [active]);

    const toggleDrawer = useCallback(() => {
        setShowDrawer(!showDrawer);
    }, [showDrawer]);

    const closeDrawer = useCallback(() => {
        setShowDrawer(false);
    }, []);

    return ReactDOM.createPortal(
        <>
            {folderState.apps.map(
                app =>
                    app.id === appId && (
                        <Draggable
                            key={app.id}
                            axis='both'
                            handle='.handle'
                            disabled={handleDrag}
                        >
                            <AnimateFadeInOut
                                appIndex={app.appIndex}
                                onClick={handleClick}
                                open={app.isOpen}
                                minimize={app.isMinimize}
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
                                        folderName={app.appName}
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
});

export default FolderApp;

FolderApp.propTypes = {
    appId: PropTypes.number.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    marginTop: PropTypes.string,
    marginLeft: PropTypes.string,
    toolbarMenu: PropTypes.array
};
