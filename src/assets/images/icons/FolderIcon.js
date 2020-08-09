import React from 'react';

import { useSettingsContext } from '../../../contexts/settingsContext';

const FolderIcon = (props) => {
    const { width, height } = props;
    const { getTheme } = useSettingsContext();

    return (
        <svg
            key={getTheme()}
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            enableBackground='new 0 0 730 730'
            viewBox='0 0 730 730'
            width={width ? width : '100%'}
            height={height ? height : '100%'}
        >
            <linearGradient id='a'>
                <stop offset='0' stopColor='#e8b65d' />
                <stop offset='1' stopColor='#f4a931' />
            </linearGradient>
            <linearGradient
                id='b'
                gradientTransform='matrix(1 0 0 -1 0 730)'
                gradientUnits='userSpaceOnUse'
                x1='369.2893'
                x2='369.2893'
                xlinkHref='#a'
                y1='0'
                y2='591.0999'
            />
            <linearGradient
                id='c'
                gradientTransform='matrix(.2567 -.00204147 .00204148 -1 -249.2226 729.2991)'
                gradientUnits='userSpaceOnUse'
                x1='1109.9205'
                x2='1109.9205'
                xlinkHref='#a'
                y1='-3.152'
                y2='588.5283'
            />
            <linearGradient
                id='d'
                gradientTransform='matrix(1 0 0 -1 0 730)'
                gradientUnits='userSpaceOnUse'
                x1='698.7946'
                x2='698.7946'
                xlinkHref='#a'
                y1='.099976'
                y2='591.0999'
            />
            <path d='m277.2 102-96.7-72.3h-133.9v72.3' fill='#e8b65d' />
            <path d='m46.6 91.3h642.9v58.6h-642.9z' fill='#e8b65d' />
            <path
                d='m721.8 188.7c.1 1.1.1 2.1.2 3.2.1 0 .2 0 .3-.1.1-.8.2-1.5.3-2.3z'
                fill='#f2f2f2'
            />
            <path
                d='m708.1 175-165.7-165.7c-8.5.2-17-.3-25.4-.3-2.9 0-4.6-2.2-4.8-4.5-96.7 65.4-180.9 141.8-238 242.9l253.8 253.8c39.4-74.3 90.5-137.1 153.9-188.1-1.4-1.3-2.2-3.3-1.6-5.1 3.1-9.4 9.1-16.8 15.1-24.3 3-4.3 6.2-8.5 9.5-12.5 0 0 0 0 .1-.1.6-1 1.2-2 1.8-3.1.4-4.9.8-9.8 1.2-14.7 2.1-26.2-.1-52.2.1-78.3z'
                fill='#f2f2f2'
            />
            <path
                d='m607.4 19.2h23.6v219.3h-23.6z'
                fill='#6c63ff'
                transform='matrix(.7071 -.7071 .7071 .7071 90.2318 475.5644)'
            />
            <path
                d='m590.4 3.6h11.8v297.3h-11.8z'
                fill='#6c63ff'
                opacity='.3'
                transform='matrix(.7071 -.7071 .7071 .7071 67.0066 466.2051)'
            />
            <path
                d='m563.4 30.5h11.8v297.3h-11.8z'
                fill='#6c63ff'
                opacity='.3'
                transform='matrix(.7071 -.7071 .7071 .7071 40.0362 455.0211)'
            />
            <path
                d='m536.5 57.5h11.8v297.3h-11.8z'
                fill='#6c63ff'
                opacity='.3'
                transform='matrix(.7071 -.7071 .7071 .7071 13.1072 443.937)'
            />
            <path
                d='m509.6 84.4h11.8v297.3h-11.8z'
                fill='#6c63ff'
                opacity='.3'
                transform='matrix(.7071 -.7071 .7071 .7071 -13.7925 432.7823)'
            />
            <path
                d='m482.7 111.3h11.8v297.3h-11.8z'
                fill='#6c63ff'
                opacity='.3'
                transform='matrix(.7071 -.7071 .7071 .7071 -40.6923 421.6275)'
            />
            <path
                d='m455.8 138.2h11.8v297.3h-11.8z'
                fill='#6c63ff'
                opacity='.3'
                transform='matrix(.7071 -.7071 .7071 .7071 -67.592 410.4728)'
            />
            <path
                d='m353.1 566.2-267.4-239.4c63.1-119.6 157.6-213.5 266-297.1l267.4 239.4c-116.9 74.6-204.9 174.2-266 297.1z'
                fill='#e6e6e6'
            />
            <g fill='#6c63ff'>
                <path
                    d='m427.8 69.2h23.6v219.3h-23.6z'
                    transform='matrix(.6671 -.745 .745 .6671 13.1233 387.0019)'
                />
                <path
                    d='m396.1 65.4h11.8v297.3h-11.8z'
                    opacity='.3'
                    transform='matrix(.6671 -.745 .745 .6671 -25.6109 370.7761)'
                />
                <path
                    d='m370.7 93.7h11.8v297.3h-11.8z'
                    opacity='.3'
                    transform='matrix(.6671 -.745 .745 .6671 -55.183 361.2543)'
                />
                <path
                    d='m345.3 122.1h11.8v297.3h-11.8z'
                    opacity='.3'
                    transform='matrix(.6671 -.745 .745 .6671 -84.7798 351.8103)'
                />
                <path
                    d='m319.9 150.4h11.8v297.3h-11.8z'
                    opacity='.3'
                    transform='matrix(.6671 -.745 .745 .6671 -114.3519 342.2884)'
                />
                <path
                    d='m294.6 178.8h11.8v297.3h-11.8z'
                    opacity='.3'
                    transform='matrix(.6671 -.745 .745 .6671 -143.8712 332.8692)'
                />
                <path
                    d='m269.2 207.1h11.8v297.3h-11.8z'
                    opacity='.3'
                    transform='matrix(.6671 -.745 .745 .6671 -173.468 323.425)'
                />
                <path
                    d='m243.8 235.5h11.8v297.3h-11.8z'
                    opacity='.3'
                    transform='matrix(.6671 -.745 .745 .6671 -203.0401 313.9033)'
                />
            </g>
            <path d='m38.8 138.9h661v591.1h-661z' fill='url(#b)' />
            <path d='m-.2 138.8 74.2.2-2.5 590.9-39.8-.1z' fill='url(#c)' />
            <path d='m700.9 729.9h-32.9v-591h61.6z' fill='url(#d)' />
        </svg>
    );
};

export default FolderIcon;
