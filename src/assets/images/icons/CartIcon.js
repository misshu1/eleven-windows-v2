import React from 'react';

import { useSettingsContext } from '../../../contexts/settingsContext';

const CartIcon = (props) => {
    const { width, height } = props;
    const { getTheme } = useSettingsContext();

    return (
        <svg
            key={getTheme().id}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 750 600'
            width={width ? width : '100%'}
            height={height ? height : '100%'}
        >
            <g
                className='fill-color'
                fill={getTheme().accentBg}
                style={{ transition: 'fill 0.2s ease-in-out' }}
            >
                <circle cx='202.41' cy='546.32' r='50.36' stroke='gray' />
                <circle cx='449.66' cy='544.77' r='48.81' />
            </g>
            <g
                className='stroke-color'
                strokeMiterlimit='10'
                stroke={getTheme().accentBg}
                style={{ transition: 'stroke 0.2s ease-in-out' }}
            >
                <path
                    d='M524.53 387.6H104.38L13.47 87.23h604.7L617.6 89zm-418.16-2.72h416.2l91.9-294.92H17.1zM620.76 78.3l-2.6-.7L635.9 10h103.22v2.72H637.98L620.76 78.3z'
                    strokeWidth='20'
                />
                <g strokeWidth='10'>
                    <path d='M42.85 178.3h545.1v2.7H42.85zm30.3 100.13h483.56v2.72H73.16z' />
                    <path d='M314.46 88.6h2.7v297.64h-2.7zm103.8 297.54l19.3-297.64 2.7.18-19.3 297.63-2.68-.17zM191.44 88.68l2.68-.18 19.2 297.64-2.68.18-19.2-297.64z' />
                </g>
                <path
                    d='M131.47 488.6h381.5v2.26h-381.5zm391.93-92.8h.6v95.08h-.6z'
                    strokeWidth='20'
                />
            </g>
        </svg>
    );
};

export default CartIcon;
