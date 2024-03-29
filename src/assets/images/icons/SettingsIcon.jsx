import React from 'react';

import { useSettingsContext } from 'contexts';

export function SettingsIcon({ width, height }) {
    const { getSelectedTheme } = useSettingsContext();

    return (
        <svg
            key={getSelectedTheme().id}
            style={{ width, height }}
            viewBox='0 0 750 750'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fill='var(--primary)'
                fillRule='evenodd'
                d='M400 100h-50v51.373a223.54 223.54 0 00-64.675 17.207l-25.933-44.917-43.302 25 25.893 44.848a226.295 226.295 0 00-48.317 48.261l-45.009-25.986-25 43.301 45.028 25.997A223.532 223.532 0 00151.373 350H100v50h51.373a223.532 223.532 0 0017.312 64.916l-44.595 25.747 25 43.301 44.576-25.736a226.314 226.314 0 0047.507 47.664l-25.516 44.195 43.302 25 25.444-44.071A223.515 223.515 0 00350 598.627V650h50v-51.373a223.545 223.545 0 0065.687-17.65l25.403 44 43.302-25-25.487-44.144a226.268 226.268 0 0047.085-47.139l43.981 25.393 25-43.301-43.889-25.339A223.547 223.547 0 00598.627 400H650v-50h-51.373a223.547 223.547 0 00-17.545-65.447l44.322-25.589-25-43.301-44.414 25.643a226.3 226.3 0 00-47.894-47.737l25.863-44.796-43.302-25-25.892 44.847A223.5 223.5 0 00400 151.373V100zm-25.5 437c89.746 0 162.5-72.754 162.5-162.5S464.246 212 374.5 212 212 284.754 212 374.5 284.754 537 374.5 537z'
                clipRule='evenodd'
            ></path>
            <path
                fill='#fff'
                fillRule='evenodd'
                d='M375 565c104.934 0 190-85.066 190-190s-85.066-190-190-190-190 85.066-190 190 85.066 190 190 190zm0-30c88.366 0 160-71.634 160-160s-71.634-160-160-160-160 71.634-160 160 71.634 160 160 160z'
                clipRule='evenodd'
            ></path>
        </svg>
    );
}
