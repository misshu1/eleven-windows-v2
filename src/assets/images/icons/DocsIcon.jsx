import React from 'react';

import { useSettingsContext } from 'contexts';

export function DocsIcon({ width, height }) {
    const { getSelectedTheme } = useSettingsContext();

    return (
        <svg
            key={getSelectedTheme().id}
            xmlns='http://www.w3.org/2000/svg'
            style={{ width, height }}
            fill='none'
            viewBox='0 0 750 750'
        >
            <path fill='var(--primary)' d='M100 100H650V650H100z'></path>
            <rect
                width='90'
                height='25'
                x='141'
                y='533'
                fill='#fff'
                rx='5'
            ></rect>
            <rect
                width='181'
                height='25'
                x='141'
                y='585'
                fill='#fff'
                rx='5'
            ></rect>
            <rect
                width='144'
                height='25'
                x='363'
                y='585'
                fill='#fff'
                rx='5'
            ></rect>
            <rect
                width='70'
                height='25'
                x='547'
                y='585'
                fill='#fff'
                rx='5'
            ></rect>
            <rect
                width='160'
                height='25'
                x='272'
                y='533'
                fill='#fff'
                rx='5'
            ></rect>
            <rect
                width='144'
                height='25'
                x='473'
                y='533'
                fill='#fff'
                rx='5'
            ></rect>
            <path
                fill='#fff'
                fillRule='evenodd'
                d='M399.6 262l-70.485 216.845 28.531 9.274 70.485-216.845L399.6 262zm139.22 126.243l10.607-10.606-10.607-10.607-76-76-21.213 21.213L507 377.637l-65.393 65.393 21.213 21.213 76-76zm-319.213 0l76 76 21.213-21.213-65.394-65.393 65.394-65.394-21.213-21.213-76 76L209 377.637l10.607 10.606z'
                clipRule='evenodd'
            ></path>
            <rect
                width='90'
                height='25'
                x='141'
                y='140'
                fill='#fff'
                rx='5'
            ></rect>
            <rect
                width='181'
                height='25'
                x='141'
                y='192'
                fill='#fff'
                rx='5'
            ></rect>
            <rect
                width='144'
                height='25'
                x='363'
                y='192'
                fill='#fff'
                rx='5'
            ></rect>
            <rect
                width='70'
                height='25'
                x='547'
                y='192'
                fill='#fff'
                rx='5'
            ></rect>
            <rect
                width='160'
                height='25'
                x='272'
                y='140'
                fill='#fff'
                rx='5'
            ></rect>
            <rect
                width='144'
                height='25'
                x='473'
                y='140'
                fill='#fff'
                rx='5'
            ></rect>
        </svg>
    );
}
