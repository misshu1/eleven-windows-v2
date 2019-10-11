import React, { useContext, useState, useEffect, memo } from 'react';
import ReactDOM from 'react-dom';
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

const FolderApp = memo(props => {
    const { globalApp } = useContext(GlobalAppContext);
    const [handleDrag, setHandleDrag] = useState(false);
    const [close, setClose] = useState('');
    const { folder, minimizeApp, closeApp } = useContext(FolderContext);
    const { activeWindow } = useContext(IndexContext);
    const { isMobile } = globalApp;
    useEffect(() => {
        isMobile && setHandleDrag(true);
    }, [isMobile]);

    const quitApp = () => {
        setClose('close');
        setTimeout(() => {
            closeApp(props.appOpen, props.appMinimize);
        }, 200);
    };

    return ReactDOM.createPortal(
        <Draggable axis='both' handle='.handle' disabled={handleDrag}>
            <AnimateFadeInOut
                appIndex={props.appIndexValue}
                onClick={() => activeWindow(props.appIndexName)}
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
                        <Name className='handle'>{props.folderName}</Name>
                        <Buttons>
                            <div
                                onClick={() =>
                                    minimizeApp(props.appMinimize, true)
                                }
                            >
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
                            <div className='closeBtnDesktop' onClick={quitApp}>
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
    );
});
export default FolderApp;
