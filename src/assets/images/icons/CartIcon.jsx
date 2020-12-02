import React from 'react';

import { useSettingsContext } from 'contexts';

export function CartIcon({ width, height, color }) {
    const { getSelectedTheme } = useSettingsContext();

    return (
        <svg
            key={getSelectedTheme().id}
            xmlns='http://www.w3.org/2000/svg'
            style={{ width, height }}
            fill='none'
            viewBox='0 0 750 750'
        >
            <path
                fill={color ? color : '#fff'}
                style={{ transition: 'fill 0.2s ease-in-out' }}
                fillRule='evenodd'
                d='M142.926 104H43v41h79.377l6.663 22.067h-.113L217 459.124V565h60.482C264.103 572.157 255 586.266 255 602.5c0 23.472 19.028 42.5 42.5 42.5s42.5-19.028 42.5-42.5c0-16.234-9.103-30.343-22.482-37.5h179.964C484.103 572.157 475 586.266 475 602.5c0 23.472 19.028 42.5 42.5 42.5s42.5-19.028 42.5-42.5c0-16.234-9.103-30.343-22.482-37.5H589v-45H260v-59.562h356.197l89.845-293.371H161.967L143 104.244V104h-.074zm400.814 99.743h120.657l-19.989 59.536H543.74v-59.536zm-25 0h-80.836v59.536h80.836v-59.536zm-105.836 0h-79.789v59.536h79.789v-59.536zm-104.789 0H173.986l19.683 59.536h114.446v-59.536zm-106.181 84.536l20.49 61.974h85.691v-61.974H201.934zm28.755 86.974l18.475 55.881h58.951v-55.881h-77.426zm102.426 55.881h79.789v-55.881h-79.789v55.881zm104.789 0h80.836v-55.881h-80.836v55.881zm105.836 0h44.31l18.762-55.881H543.74v55.881zm71.466-80.881l20.808-61.974H543.74v61.974h71.466zm-202.302 0h-79.789v-61.974h79.789v61.974zm105.836 0h-80.836v-61.974h80.836v61.974z'
                clipRule='evenodd'
            ></path>
        </svg>
    );
}
