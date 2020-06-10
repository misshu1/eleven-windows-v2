import React from 'react';
import ReactDOM from 'react-dom';

import vid from '../../assets/videos/Illidan_Stormrage.mp4';
import { Video } from './style';

const VideoApp = () => {
    return ReactDOM.createPortal(
        <Video autoPlay muted loop>
            {/* TODO Import video source from settings context */}
            <source src={vid} type='video/mp4' />
        </Video>,
        document.getElementById('video')
    );
};

export default VideoApp;
