import React from 'react';

import { useSettingsContext } from 'contexts';

export function CalculatorIcon({ width, height }) {
    const { getSelectedTheme } = useSettingsContext();

    return (
        <svg
            key={getSelectedTheme().id}
            xmlns='http://www.w3.org/2000/svg'
            style={{ width, height }}
            fill='none'
            viewBox='0 0 750 750'
        >
            <path fill='#fff' d='M100 100H650V650H100z'></path>
            <path fill='var(--primary)' d='M375 375H650V650H375z'></path>
            <path
                fill='#fff'
                fillRule='evenodd'
                d='M606 458H419v30h187v-30zm0 80H419v30h187v-30z'
                clipRule='evenodd'
            ></path>
            <path fill='#fff' d='M100 375H375V650H100z'></path>
            <path
                fill='#000'
                fillRule='evenodd'
                d='M181.721 435.279l-21.213 21.213L216.016 512l-55.508 55.508 21.213 21.213 55.508-55.508 55.508 55.508 21.213-21.213L258.442 512l55.508-55.508-21.213-21.213-55.508 55.508-55.508-55.508z'
                clipRule='evenodd'
            ></path>
            <path fill='#fff' d='M375 100H650V375H375z'></path>
            <path fill='#000' d='M419 223H606V253H419z'></path>
            <path fill='#fff' d='M100 100H375V375H100z'></path>
            <path
                fill='#000'
                fillRule='evenodd'
                d='M252 144h-30v79h-78v30h78v78h30v-78h79v-30h-79v-79z'
                clipRule='evenodd'
            ></path>
        </svg>
    );
}
