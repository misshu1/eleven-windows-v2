import React from 'react';

import { useSettingsContext } from 'contexts';

export function EmailIcon({ width, height }) {
    const { getSelectedTheme } = useSettingsContext();

    return (
        <svg
            key={getSelectedTheme().id}
            xmlns='http://www.w3.org/2000/svg'
            style={{ width, height }}
            fill='none'
            viewBox='0 0 750 750'
        >
            <rect
                width='610.156'
                height='372'
                x='70'
                y='189'
                fill='#fff'
                rx='26'
            ></rect>
            <path
                fill='var(--primary)'
                fillRule='evenodd'
                d='M677.105 202.767L453.56 339.058l2.905 2.696 77.603 72.026.053.049 143.871 131.572A25.909 25.909 0 00680.156 535V215c0-4.422-1.104-8.587-3.051-12.233zM437.349 348.941l-57.195 34.871c-3.04 1.853-6.837 1.835-9.925-.048l-57.617-35.128 1.369 1.62-7.331 6.804-77.657 72.075-.027.025-.027.025L86.683 559.281A25.95 25.95 0 0096 561h558.156c3.26 0 6.379-.6 9.254-1.695L521.166 429.22l-.026-.024-.027-.025-77.656-72.075-7.287-6.763 1.179-1.392zm-140.578-9.963L73.127 202.627A25.884 25.884 0 0070 215v320c0 3.721.782 7.259 2.19 10.46l143.922-131.62.027-.025 77.602-72.025 3.03-2.812zm362.896-149.393L374.925 363.186 90.265 189.635A26.05 26.05 0 0196 189h558.156c1.891 0 3.735.202 5.511.585z'
                clipRule='evenodd'
            ></path>
        </svg>
    );
}
