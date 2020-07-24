import React from 'react';

import { THEME } from '../../../components/theme/theme';
import { useSettingsContext } from '../../../contexts/settingsContext';

const LogoIcon = (props) => {
    const { width, height } = props;
    const { getTheme } = useSettingsContext();

    return (
        <svg
            key={getTheme().id}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 618.38 748.53'
            width={width ? width : '100%'}
            height={height ? height : '100%'}
        >
            <g
                fill={getTheme().accentBg}
                style={{ transition: 'fill 0.2s ease-in-out' }}
            >
                <rect
                    x='203.9'
                    y='-25.47'
                    width='69.77'
                    height='800.8'
                    rx='34.28'
                    transform='matrix(.927184 .374607 -.374607 .927184 91.04 -63.12)'
                />
                <rect
                    x='478.24'
                    y='-25.49'
                    width='69.77'
                    height='801.22'
                    rx='34.28'
                    transform='matrix(.927184 -.374607 .374607 .927184 -169.96 218.56)'
                />
                <path d='M172 653.37v34.9h276.4v-34.9c.017-19.175-15.456-34.763-34.63-34.9H206.63c-19.174.127-34.647 15.715-34.63 34.9z' />
                <path d='M407.5 624.2l-5 2a34.89 34.89 0 0 0-19.29 45.42l22.25 55.07a34.89 34.89 0 0 0 45.45 19.33c17.85-7.257 26.477-27.577 19.3-45.46l-24.26-60a29.52 29.52 0 0 0-38.45-16.36zm-189.84 2.02l-5-2c-15.116-6.055-32.284 1.23-38.43 16.3l-24.03 59.5c-7.153 17.866 1.46 38.155 19.28 45.42 17.866 7.153 38.155-1.46 45.42-19.28l22-54.57c7.13-17.844-1.457-38.1-19.24-45.38z' />
            </g>
            <g
                fill={getTheme().id === THEME.dark ? '#b20a88' : '#00B140'}
                style={{ transition: 'fill 0.2s ease-in-out' }}
            >
                <rect
                    x='343.32'
                    y='440.05'
                    width='67.36'
                    height='159.41'
                    rx='33.09'
                    transform='matrix(0 -1 1 0 -209.56 895.79)'
                />
                <rect
                    x='367.64'
                    y='367.06'
                    width='67.36'
                    height='188.97'
                    rx='33.09'
                    transform='matrix(.927184 -.374607 .374607 .927184 -210.48 182.97)'
                />
            </g>
        </svg>
    );
};

export default LogoIcon;
