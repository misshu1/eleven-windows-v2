import React from 'react';
import Scrollbar from 'react-scrollbars-custom';

import { useSettingsContext } from '../../contexts/settingsContext';

const ScrollbarApp = (props) => {
    const { theme } = useSettingsContext();

    return (
        <Scrollbar
            {...props}
            thumbYProps={{
                style: { background: theme.accentBg, cursor: 'default' },
            }}
            thumbXProps={{
                style: { background: theme.accentBg, cursor: 'default' },
            }}
            style={{ width: '100%', height: '100%' }}
            contentProps={{
                style: {
                    position: 'relative',
                    padding: 0,
                },
            }}
        >
            {props.children}
        </Scrollbar>
    );
};

export default ScrollbarApp;
