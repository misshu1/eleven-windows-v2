import React from 'react';
import ReactDOM from 'react-dom';

import { useSettingsContext } from 'contexts';
import { Video } from './style';

const VideoApp = () => {
    const { getSelectedVideo } = useSettingsContext();

    return ReactDOM.createPortal(
        <Video key={getSelectedVideo().name} autoPlay muted loop>
            <source src={getSelectedVideo().video.webm} type='video/webm' />
            <source src={getSelectedVideo().video.mp4} type='video/mp4' />
        </Video>,
        document.getElementById('video')
    );
};

export default VideoApp;
