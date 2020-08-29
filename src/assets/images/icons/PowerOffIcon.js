import React from 'react';

import { useSettingsContext } from '../../../contexts/settingsContext';

const PowerOffIcon = (props) => {
    const { width, height } = props;
    const { getSelectedTheme } = useSettingsContext();

    return (
        <svg
            key={getSelectedTheme().id}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 750 750'
            style={{ width, height }}
        >
            <path
                d='M374.9 74.3C541 74.3 675.7 209 675.7 375.1S541 675.7 374.9 675.7 74.2 541 74.2 374.9c.1-166.1 134.6-300.6 300.7-300.6m0-74.3C167.9 0 0 167.8 0 374.9S167.9 750 374.9 750s374.9-167.9 374.9-374.9C749.6 168 581.9.2 374.9 0z'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <path d='M376.3 375.2c11.7 0 21.3-9.5 21.3-21.3V162.7c0-11.7-9.5-21.3-21.3-21.3s-21.3 9.5-21.3 21.3V354c.1 11.7 9.6 21.2 21.3 21.2z' />
            <path
                d='M462.1 212.2c-5.4-2.9-11.9-3.2-17.6-.6-5.6 2.6-9.7 7.6-11.1 13.6v.1c-1.9 8.6 2.2 17.5 10 21.6 59.8 31.6 90.3 99.9 74 165.5s-75.2 111.7-142.8 111.7S248.1 478 231.8 412.4s14.3-133.9 74-165.5c7.8-4.1 11.9-12.9 10.1-21.6v-.1c-1.4-6-5.4-11-11-13.6s-12.1-2.4-17.5.6c-75.6 40.1-114.2 126.6-93.5 209.7s95.3 141.4 180.9 141.4S535 505 555.7 421.9c20.6-83.1-17.9-169.6-93.6-209.7z'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <path d='M375.7 129.5c136.3 0 246.8 110.5 246.8 246.8S512 623 375.7 623 128.9 512.5 128.9 376.2c.1-136.3 110.5-246.7 246.8-246.7m0-61C205.7 68.5 68 206.2 68 376.2S205.7 684 375.7 684s307.7-137.7 307.7-307.7c-.3-170-137.9-307.6-307.7-307.8z' />
            <g fill='#fff'>
                <path d='M374.2 92.4v49.1c10.9 0 19.7 8.8 19.7 19.6v176.6c0 10.8-8.8 19.6-19.7 19.6v166.6c2.4 0 4.8.1 7.2 0 66.3-3.2 122.2-50.3 136.6-115s-16.3-131-75-162c-7.8-4.1-12-12.9-10.1-21.6v-.1c1.4-6 5.5-11.1 11.1-13.6s12.1-2.3 17.6.6c75.8 40.1 114.5 126.6 93.8 209.7C534.8 505 460 563.3 374.2 563.3v98.1c157.4 0 285-127.4 285-284.5S531.6 92.4 374.2 92.4z' />
                <path d='M353.4 562.1c-81.2-9.3-146.8-70.4-161.9-150.6-15.1-80.3 23.8-161 96-199.3 5.4-2.9 11.9-3.1 17.5-.6 5.6 2.6 9.7 7.6 11 13.6v.1a19.6 19.6 0 0 1-10.1 21.6c-59.8 31.6-90.3 99.8-74 165.4s75.2 111.6 142.8 111.5V357.3c-10.8 0-19.6-8.8-19.6-19.6V161.1c0-10.8 8.8-19.6 19.6-19.6V92.4c-157.1 0-284.5 127.4-284.5 284.5s127.4 284.5 284.5 284.5v-98.1a188.76 188.76 0 0 1-21.3-1.2z' />
            </g>
        </svg>
    );
};

export default PowerOffIcon;
