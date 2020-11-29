import React from 'react';

import { useSettingsContext } from 'contexts';

export function UserIcon({ width, height }) {
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
                fill='#E3E3E3'
                d='M569.454 569.454A275.005 275 0 01375 650a275 275 0 01-194.454-469.454L375 375l194.454 194.454z'
            ></path>
            <path
                fill='#fff'
                d='M569.454 569.454a275.005 275 0 000-388.908 275 275 0 00-388.908 0L375 375l194.454 194.454z'
            ></path>
            <circle
                cx='371.512'
                cy='255.907'
                r='87.907'
                fill='var(--primary)'
            ></circle>
            <path
                fill='var(--primary)'
                d='M525 507.767c0 82.843-61.576 73.256-144.419 73.256-82.842 0-155.581 9.587-155.581-73.256 0-82.842 67.157-150 150-150s150 67.158 150 150z'
            ></path>
        </svg>
    );
}
