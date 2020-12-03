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
                clipRule='evenodd'
                d='M113.032 59H0v46.377h89.788l7.536 24.961h-.128l99.624 330.36V580.46h76.192C253.502 589.657 240 609.502 240 632.5c0 31.756 25.744 57.5 57.5 57.5s57.5-25.744 57.5-57.5c0-22.998-13.502-42.843-33.012-52.04h191.024C493.502 589.657 480 609.502 480 632.5c0 31.756 25.744 57.5 57.5 57.5s57.5-25.744 57.5-57.5c0-22.998-13.502-42.843-33.012-52.04h55.62v-50.902H245.46v-67.373h402.912L750 130.338H134.57l-21.455-71.062V59h-.083zm453.381 112.824h136.48l-22.611 67.344H566.413v-67.344zm-28.279 0h-91.438v67.344h91.438v-67.344zm-119.717 0h-90.253v67.344h90.253v-67.344zm-118.532 0h-151.72l22.264 67.344h129.456v-67.344zm-120.106 95.623l23.176 70.102h96.93v-70.102H179.779zm32.526 98.381l20.897 63.21h66.683v-63.21h-87.58zm115.859 63.21h90.253v-63.21h-90.253v63.21zm118.532 0h91.438v-63.21h-91.438v63.21zm119.717 0h50.12l21.223-63.21h-71.343v63.21zm80.838-91.489l23.537-70.102H566.413v70.102h80.838zm-228.834 0h-90.253v-70.102h90.253v70.102zm119.717 0h-91.438v-70.102h91.438v70.102z'
            ></path>
        </svg>
    );
}
