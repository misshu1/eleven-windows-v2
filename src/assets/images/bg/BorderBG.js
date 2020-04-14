import React, { useContext } from 'react';

import { ThemeContext } from '../../../contexts/themeContext';

const BorderBG = (props) => {
    const { theme } = useContext(ThemeContext);

    return (
        <svg viewBox='0 0 60 600' {...props}>
            <path
                d='M4.8 478.6c.2-34.8 1.1-51.1 3.4-72 4.5-41 11.8-73.6 16.3-86.4C36.3 286 47 259.8 51.9 212.7c.4-4 .9-7.5 1-8 4.8-41.4 2.6-73 1.3-90.5C50.5 66 41.1 24.5 34.2.1H-.9v600H6c-1.3-48.9-1.3-90.3-1.2-121.5z'
                fill={theme.startMenuBg}
            />
            <linearGradient
                id='gradiant'
                gradientUnits='userSpaceOnUse'
                x1={31}
                y1={600.569}
                x2={31}
                y2={-0.414}
            >
                <stop offset={0} stopColor='#fff' stopOpacity={0} />
                <stop
                    offset={0.194}
                    stopColor={theme.accentBg}
                    stopOpacity={0.194}
                />

                {/* <stop offset={0.007} stopColor='#fcf7f9' stopOpacity={0.007} />
                <stop offset={0.047} stopColor='#eec9d5' stopOpacity={0.047} />
                <stop offset={0.092} stopColor='#e09eb3' stopOpacity={0.092} />
                <stop offset={0.141} stopColor='#d47895' stopOpacity={0.141} />
                <stop offset={0.194} stopColor='#ca587c' stopOpacity={0.194} />
                <stop offset={0.253} stopColor='#c23c67' stopOpacity={0.253} />
                <stop offset={0.32} stopColor='#bb2655' stopOpacity={0.32} />
                <stop offset={0.397} stopColor='#b51548' stopOpacity={0.397} />
                <stop offset={0.493} stopColor='#b20a3f' stopOpacity={0.493} />
                <stop offset={0.627} stopColor='#b00339' stopOpacity={0.627} /> */}
                <stop offset={1} stopColor={theme.accentBg} />
            </linearGradient>
            <path
                d='M35.1-.1c1.7 6.3 3.7 13.9 5.8 22.6 1 4.1 2.6 11 4.3 20 0 0 3 15.7 6.6 44.2 0 .4.3 2.6.5 4.2 0 0 0 0 0 0l4.3 54.4c.2 6.2.1 11.8.1 11.8 0 5-.1 9.2-.2 12.2-.1 1.9-.1 3.3-.2 5-.4 9.9-1.2 17.9-1.5 21.6-.4 3.9-.8 7.5-.8 7.5-.3 2.6-.4 3.5-.8 6.4-.4 3-.5 4.3-.7 6.4 0 0-.5 4.4-1.3 10.2-2.9 20.9-7.9 39.7-7.9 39.7-1.2 4.4-2.4 8.6-2.9 10-1.8 6-3.5 11.1-4.8 15-.5 1.4-1.1 3.1-2.2 6.4-.6 1.8-1.9 5.5-4.1 11.6-3.3 9.4-2.9 8.1-3.5 9.8-.7 2.2-2.4 7.2-4.1 13.9-1 3.8-1.7 6.7-2.1 8.7-.4 1.8-1.2 5.4-2.9 14-.3 1.5-1.6 8.3-2.5 13.7-4.4 25-6.7 52.9-6.9 55.7-.7 8.9-1.1 15.6-1.2 18.4-.3 5.9-.6 12.9-.7 22.3-.2 12.1-.2 20.9-.2 38.7 0 33.1.2 49.8.3 56.7.3 10.6.5 24 .9 39.5'
                fill='none'
                stroke='url(#gradiant)'
                strokeWidth={3}
                strokeMiterlimit={10}
            />
        </svg>
    );
};

export default BorderBG;
