import React from 'react';
import ReactDOM from 'react-dom';

import { useSettingsContext } from '../../contexts/settingsContext';
import { Video } from './style';

const VideoApp = () => {
    const { getSelectedVideoBg, getSelectedVideoBgName } = useSettingsContext();

    return ReactDOM.createPortal(
        <Video key={getSelectedVideoBgName()} autoPlay muted loop>
            <source src={getSelectedVideoBg().webm} type='video/webm' />
            <source src={getSelectedVideoBg().mp4} type='video/mp4' />
        </Video>,
        document.getElementById('video')
    );
};

export default VideoApp;
