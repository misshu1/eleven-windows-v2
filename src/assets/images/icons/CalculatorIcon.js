import React from 'react';

import { useSettingsContext } from '../../../contexts/settingsContext';

const CalculatorIcon = (props) => {
    const { width, height } = props;
    const { theme } = useSettingsContext();

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 750 750'
            width={width ? width : '100%'}
            height={height ? height : '100%'}
        >
            <g fill='#fff'>
                <path d='M0 0h375v375H0z' />
                <path d='M375 0h375v375H375z' />
                <path d='M0 375h375v375H0z' />
            </g>
            <path
                d='M375 375h375v375H375z'
                fill={theme.id === 'dark' ? '#af0138' : '#009BCE'}
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <g fill='none'>
                <g stroke='#000'>
                    <g strokeWidth='25' strokeMiterlimit='10'>
                        <path d='M90.6 659.4l193.1-193.1' />
                        <path d='M90.6 465.6l193.8 193.8M187.5 72.8v229.7' />
                        <path d='M73.5 187.5h230' />
                    </g>
                    <path
                        d='M484.8 187.7h156.4'
                        strokeMiterlimit='10'
                        strokeWidth='30'
                    />
                </g>
                <path
                    d='M484.8 519.5h156.4m-156.4 84h156.4'
                    strokeWidth='30'
                    strokeMiterlimit='10'
                    stroke='#fff'
                />
            </g>
        </svg>
    );
};

export default CalculatorIcon;
