import React, {
    useContext,
    useState,
    useEffect,
    useMemo,
    useCallback
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { FolderContext } from '../../contexts/FolderContext';
import { IndexContext } from '../../contexts/indexContext';
import { GlobalAppContext } from '../../contexts/GlobalContext';
import {
    Name,
    NameBar,
    Buttons,
    Folder,
    Content,
    AnimateFadeInOut
} from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskbarContext } from '../../contexts/taskbarContext';

const FolderApp = props => {
    const { globalApp } = useContext(GlobalAppContext);
    const [handleDrag, setHandleDrag] = useState(false);
    const [close, setClose] = useState('');
    const { folder, minimizeApp, closeApp } = useContext(FolderContext);
    const { activeWindow } = useContext(IndexContext);
    const { closeAllApps } = useContext(TaskbarContext);
    const { isMobile } = globalApp;

    useEffect(() => {
        isMobile && setHandleDrag(true);
    }, [isMobile]);

    const quitApp = useCallback(() => {
        setClose('close');
        setTimeout(() => {
            closeApp(props.appOpen, props.appMinimize);
        }, 200);
    }, [closeApp, props.appMinimize, props.appOpen]);

    const minimize = useCallback(() => {
        minimizeApp(props.appMinimize, true);
    }, [minimizeApp, props.appMinimize]);

    const active = useCallback(() => {
        activeWindow(props.appIndexName);
    }, [activeWindow, props.appIndexName]);

    const closeTaskbarApps = useCallback(() => {
        closeAllApps();
    }, [closeAllApps]);

    const handleClick = useCallback(() => {
        closeTaskbarApps();
        active();
    }, [active, closeTaskbarApps]);

    return useMemo(
        () =>
            ReactDOM.createPortal(
                <Draggable axis='both' handle='.handle' disabled={handleDrag}>
                    <AnimateFadeInOut
                        appIndex={props.appIndexValue}
                        onClick={handleClick}
                        open={folder[props.appOpen]}
                        minimize={folder[props.appMinimize]}
                        close={close}
                    >
                        <Folder
                            className='folder'
                            width={props.width}
                            height={props.height}
                            marginTop={props.marginTop}
                            marginLeft={props.marginLeft}
                        >
                            <NameBar>
                                <Name className='handle'>
                                    {props.folderName}
                                </Name>
                                <Buttons>
                                    <div onClick={minimize}>
                                        <FontAwesomeIcon
                                            icon={['fas', 'window-minimize']}
                                            size='sm'
                                        />
                                    </div>
                                    <Link to='/' className='closeBtnMobile'>
                                        <FontAwesomeIcon
                                            icon={['fas', 'times']}
                                            size='lg'
                                        />
                                    </Link>
                                    <div
                                        className='closeBtnDesktop'
                                        onClick={quitApp}
                                    >
                                        <FontAwesomeIcon
                                            icon={['fas', 'times']}
                                            size='lg'
                                        />
                                    </div>
                                </Buttons>
                            </NameBar>
                            <Content>{props.children}</Content>
                        </Folder>
                    </AnimateFadeInOut>
                </Draggable>,
                document.querySelector('#desktop')
            ),
        [
            close,
            folder,
            handleClick,
            handleDrag,
            minimize,
            props.appIndexValue,
            props.appMinimize,
            props.appOpen,
            props.children,
            props.folderName,
            props.height,
            props.marginLeft,
            props.marginTop,
            props.width,
            quitApp
        ]
    );
};
export default FolderApp;

FolderApp.propTypes = {
    appOpen: PropTypes.string.isRequired,
    appMinimize: PropTypes.string.isRequired,
    appIndexName: PropTypes.string.isRequired,
    appIndexValue: PropTypes.number.isRequired,
    folderName: PropTypes.string.isRequired,
    linkMobile: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    marginTop: PropTypes.string,
    marginLeft: PropTypes.string
};
