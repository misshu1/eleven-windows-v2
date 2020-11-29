import React from 'react';

import { useSettingsContext } from 'contexts';

export function TermsIcon({ width, height }) {
    const { getSelectedTheme } = useSettingsContext();

    return (
        <svg
            key={getSelectedTheme().id}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 750 750'
            style={{ width, height }}
        >
            <rect
                width='417'
                height='517'
                x='148'
                y='133'
                fill='var(--primaryDark)'
                rx='25'
            ></rect>
            <rect
                width='417'
                height='520'
                x='184'
                y='100'
                fill='var(--primary)'
                rx='25'
            ></rect>
            <path
                fill='#fff'
                d='M244.64 520c0-5.523 4.477-10 10-10h221.6c5.523 0 10 4.477 10 10v10c0 5.523-4.477 10-10 10h-221.6c-5.523 0-10-4.477-10-10v-10zM244.64 454c0-5.523 4.477-10 10-10H530.6c5.523 0 10 4.477 10 10v10c0 5.523-4.477 10-10 10H254.64c-5.523 0-10-4.477-10-10v-10zM244.64 388c0-5.523 4.477-10 10-10h221.6c5.523 0 10 4.477 10 10v10c0 5.523-4.477 10-10 10h-221.6c-5.523 0-10-4.477-10-10v-10zM244.64 322c0-5.523 4.477-10 10-10H530.6c5.523 0 10 4.477 10 10v10c0 5.523-4.477 10-10 10H254.64c-5.523 0-10-4.477-10-10v-10zM244.64 256c0-5.523 4.477-10 10-10h221.6c5.523 0 10 4.477 10 10v10c0 5.523-4.477 10-10 10h-221.6c-5.523 0-10-4.477-10-10v-10zM244.64 190c0-5.523 4.477-10 10-10H530.6c5.523 0 10 4.477 10 10v10c0 5.523-4.477 10-10 10H254.64c-5.523 0-10-4.477-10-10v-10z'
            ></path>
        </svg>
    );
}
