import React from 'react';

import { useSettingsContext } from 'contexts';

export function CalendarIcon({ width, height }) {
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
                fill='#fff'
                fillRule='evenodd'
                d='M164.983 161.618v47.739a6 6 0 006 6h41.739a6 6 0 006-6v-47.739H530.41v47.739a6 6 0 006 6h41.74a6 6 0 006-6v-47.739h43.983c23.195 0 42 18.804 42 42v73.002H79v-73.003c0-23.195 18.804-41.999 42-41.999h43.983zm505.15 125.75H79V585c0 23.196 18.804 42 42 42h507.133c23.195 0 42-18.804 42-42V287.368z'
                clipRule='evenodd'
            ></path>
            <path
                fill='var(--primary)'
                d='M100.496 525.97H165.672V590.457H100.496z'
            ></path>
            <path
                fill='var(--primary)'
                d='M196.874 525.97H262.05V590.457H196.874z'
            ></path>
            <path
                fill='var(--primary)'
                d='M293.252 525.97H358.428V590.457H293.252z'
            ></path>
            <path
                fill='var(--primary)'
                d='M389.63 525.97H454.806V590.457H389.63z'
            ></path>
            <path
                fill='var(--primary)'
                d='M486.008 525.97H551.184V590.457H486.008z'
            ></path>
            <path
                fill='var(--primary)'
                d='M100.496 421.716H165.672V486.203H100.496z'
            ></path>
            <path
                fill='var(--primary)'
                d='M196.874 421.716H262.05V486.203H196.874z'
            ></path>
            <path
                fill='var(--primary)'
                d='M293.252 421.716H358.428V486.203H293.252z'
            ></path>
            <path
                fill='var(--primary)'
                d='M389.63 421.716H454.806V486.203H389.63z'
            ></path>
            <path
                fill='var(--primary)'
                d='M486.008 421.716H551.184V486.203H486.008z'
            ></path>
            <path
                fill='var(--primary)'
                d='M582.386 421.716H647.562V486.203H582.386z'
            ></path>
            <path
                fill='var(--primary)'
                d='M196.874 317.462H262.05V381.94899999999996H196.874z'
            ></path>
            <path
                fill='var(--primary)'
                d='M293.252 317.462H358.428V381.94899999999996H293.252z'
            ></path>
            <path
                fill='var(--primary)'
                d='M389.63 317.462H454.806V381.94899999999996H389.63z'
            ></path>
            <path
                fill='var(--primary)'
                d='M486.008 317.462H551.184V381.94899999999996H486.008z'
            ></path>
            <path
                fill='var(--primary)'
                d='M582.386 317.462H647.562V381.94899999999996H582.386z'
            ></path>
            <path fill='var(--primary)' d='M79 234H670V255H79z'></path>
            <rect
                width='27'
                height='75'
                x='178'
                y='124'
                fill='#fff'
                rx='3'
            ></rect>
            <rect
                width='27'
                height='75'
                x='544'
                y='124'
                fill='#fff'
                rx='3'
            ></rect>
        </svg>
    );
}
