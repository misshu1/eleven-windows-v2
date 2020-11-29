import React from 'react';

import { useSettingsContext } from 'contexts';

export function DocsIcon({ width, height }) {
    const { getSelectedTheme } = useSettingsContext();

    return (
        <svg
            key={getSelectedTheme().id}
            xmlns='http://www.w3.org/2000/svg'
            enableBackground='new 0 0 855 855'
            viewBox='0 0 855 855'
            style={{ width, height }}
        >
            <path d='m0 0h855v855h-855z' fill='#12125e' />
            <path
                d='m240.5 128h-165.3c-1.1 0-2-4-2-9s.9-9.1 2-9.1h165.3c1.1 0 2 4.1 2 9.1 0 4.9-.9 9-2 9z'
                fill='#f2f2f2'
            />
            <path
                d='m478.3 197.7h-291.8c-1.2 0-2.3-4.2-2.3-9.4s1-9.4 2.3-9.4h291.8c1.2 0 2.3 4.2 2.3 9.4s-1 9.4-2.3 9.4z'
                fill='#f2f2f2'
            />
            <path
                d='m431.2 128h-130.3c-3 0-5.5-4-5.5-8.8 0-4.9 2.5-8.8 5.5-8.8h130.3c3 0 5.5 4 5.5 8.8.1 4.8-2.4 8.8-5.5 8.8z'
                fill='#00ff06'
            />
            <path
                d='m128.6 197.4h-53.2c-1.2 0-2.3-4-2.3-9s1-9 2.3-9h53.1c1.2 0 2.3 4 2.3 9 0 4.9-1 9-2.2 9z'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <path
                d='m425.4 718.1h-251.4c-1.1 0-1.9-5-1.9-11.2s.9-11.2 1.9-11.2h251.5c1.1 0 1.9 5 1.9 11.2s-.9 11.2-2 11.2z'
                fill='#ff9100'
            />
            <path
                d='m128.6 718.3h-53.2c-1.2 0-2.3-5.1-2.3-11.4s1-11.4 2.3-11.4h53.1c1.2 0 2.3 5.1 2.3 11.4s-1 11.4-2.2 11.4z'
                fill='#f2f2f2'
            />
            <path
                d='m333.3 299.6-129.5 127.9 129.5 127.9 29.2-29.1-98-98 98.8-98.7z'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <path
                d='m539.7 313.7 127.3 125.8-127.3 125.7-28.7-28.6 96.4-96.3-97.1-97.1z'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <circle cx='675' cy='50.2' fill='#fff800' r='21' />
            <circle cx='726.4' cy='50.2' fill='#00ff06' r='21.4' />
            <circle
                cx='782.8'
                cy='48.9'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
                r='20.2'
            />
            <path
                d='m643.2 128h-151.7c-1 0-1.8-3.9-1.8-8.7s.8-8.7 1.8-8.7h151.7c1 0 1.8 3.9 1.8 8.7s-.8 8.7-1.8 8.7z'
                fill='#f2f2f2'
            />
            <path
                d='m783.9 128h-86.5c-.6 0-1.1-3.9-1.1-8.7s.5-8.7 1.1-8.7h86.5c.6 0 1.1 3.9 1.1 8.7s-.5 8.7-1.1 8.7z'
                fill='#f2f2f2'
            />
            <path
                d='m783 198.9h-246c-1.6 0-3-4.7-3-10.5s1.3-10.5 3-10.5h246c1.6 0 3 4.7 3 10.5s-1.3 10.5-3 10.5z'
                fill='#ff9100'
            />
            <path
                d='m633.2 718.1h-151c-1 0-1.8-5-1.8-11.2s.8-11.2 1.8-11.2h151c1 0 1.8 5 1.8 11.2s-.8 11.2-1.8 11.2z'
                fill='#f2f2f2'
            />
            <path
                d='m240 792.1h-164.3c-1.1 0-2-5-2-11.2s.9-11.2 2-11.2h164.3c1.1 0 2 5 2 11.2s-.9 11.2-2 11.2z'
                fill='#f2f2f2'
            />
            <path
                d='m559.7 792.2h-264.4c-1.8 0-3.2-5.1-3.2-11.3 0-6.3 1.4-11.3 3.2-11.3h264.5c1.8 0 3.2 5.1 3.2 11.3-.1 6.3-1.5 11.3-3.3 11.3z'
                fill='#00ff06'
            />
            <path
                d='m770.1 792.1h-149c-1 0-1.8-5-1.8-11.2s.8-11.2 1.8-11.2h149c1 0 1.8 5 1.8 11.2s-.8 11.2-1.8 11.2z'
                fill='#f2f2f2'
            />
            <g
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            >
                <path d='m768 717.6h-79c-.5 0-1-4.8-1-10.7s.4-10.7 1-10.7h79c.5 0 1 4.8 1 10.7-.1 5.9-.5 10.7-1 10.7z' />
                <path d='m510.2 289.3-102.3 314.8c-.6 2.1-11.2.6-23.5-3.4s-21.8-9-21.1-11.1l102.3-314.9c.7-2.1 11.3-.5 23.6 3.5s21.7 9 21 11.1z' />
            </g>
        </svg>
    );
}
