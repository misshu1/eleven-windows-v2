import React from 'react';

import { useSettingsContext } from 'contexts';

export function PrivacyIcon({ width, height }) {
    const { getSelectedTheme } = useSettingsContext();

    return (
        <svg
            key={getSelectedTheme().id}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 750 750'
            style={{ width, height }}
        >
            <path
                fill='var(--primary)'
                d='M374.5 100s47.586 38.613 83.925 54.133C503.413 173.346 581 179.532 581 179.532V450.77c0 27.103-10.94 53.09-30.92 71.404-19.486 17.862-44.807 40.3-65.627 56.159C443.663 609.405 374.5 650 374.5 650s-70.179-39.383-111.057-70.555c-21.095-16.087-46.538-39.252-65.848-57.528-19.194-18.166-29.595-43.574-29.595-70V179.532s77.548-6.514 122.282-26.199C325.387 137.886 374.5 100 374.5 100z'
            ></path>
            <rect
                width='196.25'
                height='196.25'
                x='277'
                y='324'
                fill='#fff'
                rx='32.404'
            ></rect>
            <path
                fill='#000'
                fillRule='evenodd'
                d='M382.355 424.164c8.404-2.739 14.461-10.479 14.461-19.598 0-11.409-9.48-20.658-21.175-20.658-11.694 0-21.174 9.249-21.174 20.658 0 8.741 5.565 16.215 13.428 19.231v30.348a7.23 7.23 0 0014.46 0v-29.981z'
                clipRule='evenodd'
            ></path>
            <path
                stroke='#fff'
                strokeLinecap='square'
                strokeLinejoin='round'
                strokeWidth='20'
                d='M325 290v-41.25c0-26.924 21.826-48.75 48.75-48.75v0h5.761C404.634 200 425 220.366 425 245.489V290'
            ></path>
        </svg>
    );
}
