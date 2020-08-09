import React from 'react';

import { useSettingsContext } from '../../../contexts/settingsContext';

const TaskIcon = (props) => {
    const { width, height } = props;
    const { getTheme } = useSettingsContext();

    return (
        <svg
            key={getTheme()}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 750 750'
            width={width ? width : '100%'}
            height={height ? height : '100%'}
        >
            <path
                d='M707 728.5c0 11.9-11.6 21.5-26 21.5H71c-14.4 0-26-9.6-26-21.5V22.7C45 10.8 56.6 1.2 71 1.2h610c14.4 0 26 9.6 26 21.5v705.8z'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <linearGradient
                id='A'
                gradientUnits='userSpaceOnUse'
                x1='270.023'
                y1='183.599'
                x2='532.622'
                y2='672.325'
            >
                <stop offset='0' stopColor='#fff' />
                <stop offset='1' stopColor='#fff' />
            </linearGradient>
            <path d='M102.4 50.9H647v654.9H102.4z' fill='url(#A)' />
            <linearGradient
                id='B'
                gradientUnits='userSpaceOnUse'
                x1='374.816'
                y1='30.476'
                x2='374.816'
                y2='101.302'
            >
                <stop offset='0' stopColor='#979a9c' />
                <stop offset='.038' stopColor='#9a9c9e' />
                <stop offset='.061' stopColor='#a2a5a7' />
                <stop offset='.079' stopColor='#b0b3b4' />
                <stop offset='.096' stopColor='#c4c7c8' />
                <stop offset='.104' stopColor='#d1d3d4' />
                <stop offset='.115' stopColor='#ccc9ca' />
                <stop offset='.133' stopColor='#c0afb0' />
                <stop offset='.156' stopColor='#ac8585' />
                <stop offset='.183' stopColor='#914a4b' />
                <stop offset='.208' stopColor='#750f0f' />
                <stop offset='.233' stopColor='#771919' />
                <stop offset='.276' stopColor='#7d3333' />
                <stop offset='.322' stopColor='#855656' />
                <stop offset='.426' stopColor='#edd3d3' />
                <stop offset='.43' stopColor='#e2caca' />
                <stop offset='.441' stopColor='#c2b1b1' />
                <stop offset='.455' stopColor='#a79b9b' />
                <stop offset='.469' stopColor='#918989' />
                <stop offset='.487' stopColor='#807c7c' />
                <stop offset='.508' stopColor='#747272' />
                <stop offset='.538' stopColor='#6d6d6d' />
                <stop offset='.618' stopColor='#6b6b6b' />
                <stop offset='.634' stopColor='#8c8c8c' />
                <stop offset='.663' stopColor='#bdbdbd' />
                <stop offset='.688' stopColor='#e1e1e1' />
                <stop offset='.708' stopColor='#f7f7f7' />
                <stop offset='.721' stopColor='#fff' />
                <stop offset='.745' stopColor='#fcfcfc' />
                <stop offset='.762' stopColor='#f2f2f3' />
                <stop offset='.778' stopColor='#e2e2e3' />
                <stop offset='.793' stopColor='#cbcbcc' />
                <stop offset='.807' stopColor='#adadaf' />
                <stop offset='.82' stopColor='#89898c' />
                <stop offset='.825' stopColor='#7a7a7d' />
            </linearGradient>
            <path
                d='M543.8 31.3h-338c-9.5 0-17.2 6.7-17.2 15v29.9c0 8.3 7.7 15 17.2 15h120.9c.8 0 6.4.1 11 3.7 8.2 6.5 20.4 11.4 36 11.4h2c15.6 0 27.8-4.9 36-11.4 4.6-3.6 10.2-3.7 11-3.7h120.9c9.5 0 17.2-6.7 17.2-15V46.4c.1-8.3-7.5-15.1-17-15.1zm7.4 44.9c0 3.5-3.3 6.4-7.4 6.4H422.9c-2.6 0-10.8.7-17.1 5.8-6.2 5-16.7 9.4-29.9 9.3h-2c-13.2 0-23.7-4.4-29.9-9.3-6.4-5.1-14.5-5.8-17.1-5.8H205.8c-4 0-7.4-2.9-7.4-6.4V46.4c0-3.5 3.3-6.4 7.4-6.4h337.9c4 0 7.4 2.9 7.4 6.4v29.8z'
                fill='url(#B)'
            />
            <linearGradient
                id='C'
                gradientUnits='userSpaceOnUse'
                x1='374.814'
                y1='161.64'
                x2='374.814'
                y2='4.428'
            >
                <stop offset='0' stopColor='#979a9c' />
                <stop offset='.084' stopColor='#9a9c9e' />
                <stop offset='.134' stopColor='#a2a5a7' />
                <stop offset='.176' stopColor='#b0b3b4' />
                <stop offset='.212' stopColor='#c4c7c8' />
                <stop offset='.23' stopColor='#d1d3d4' />
                <stop offset='.264' stopColor='#c8c9ca' />
                <stop offset='.321' stopColor='#aeafb0' />
                <stop offset='.395' stopColor='#858686' />
                <stop offset='.421' stopColor='#757575' />
                <stop offset='.507' stopColor='#7f7f7f' />
                <stop offset='.546' stopColor='#858585' />
                <stop offset='.754' stopColor='#ededed' />
                <stop offset='.757' stopColor='#e2e2e2' />
                <stop offset='.766' stopColor='#c2c2c2' />
                <stop offset='.777' stopColor='#a7a7a7' />
                <stop offset='.789' stopColor='#919191' />
                <stop offset='.802' stopColor='gray' />
                <stop offset='.819' stopColor='#747474' />
                <stop offset='.843' stopColor='#6d6d6d' />
                <stop offset='.907' stopColor='#6b6b6b' />
                <stop offset='.92' stopColor='#737374' />
                <stop offset='.941' stopColor='#78787b' />
                <stop offset='1' stopColor='#7a7a7d' />
            </linearGradient>
            <path
                d='M543.8 32.3h-338c-8.8 0-15.9 6.3-15.9 14v29.9c0 7.7 7.1 13.9 15.9 13.9h121.1c1.6 0 6.6.3 11.2 3.9 7.9 6.3 20.4 11.2 35.7 11.2h2c15.3 0 27.7-4.9 35.7-11.2 4.6-3.6 9.5-3.9 11.2-3.9h121.2c8.8 0 15.9-6.3 15.9-13.9V46.3c-.1-7.7-7.2-14-16-14zm8.6 43.8c0 4.1-3.9 7.5-8.6 7.5H422.7c-2.7 0-9.6.5-16.1 5.6-6.6 5.2-17.3 9.5-30.8 9.5h-2c-13.5 0-24.2-4.4-30.8-9.5-6.5-5.1-13.4-5.6-16.1-5.6H205.8c-4.7 0-8.6-3.4-8.6-7.5V46.3c0-4.1 3.9-7.5 8.6-7.5h338c4.7 0 8.6 3.4 8.6 7.5v29.8z'
                fill='url(#C)'
            />
            <linearGradient
                id='D'
                gradientUnits='userSpaceOnUse'
                x1='226.103'
                y1='90.667'
                x2='183.427'
                y2='20.857'
            >
                <stop offset='0' stopColor='#979a9c' />
                <stop offset='.084' stopColor='#9a9c9e' />
                <stop offset='.134' stopColor='#a2a5a7' />
                <stop offset='.176' stopColor='#b0b3b4' />
                <stop offset='.212' stopColor='#c4c7c8' />
                <stop offset='.23' stopColor='#d1d3d4' />
                <stop offset='.264' stopColor='#c8c9ca' />
                <stop offset='.321' stopColor='#aeafb0' />
                <stop offset='.395' stopColor='#858686' />
                <stop offset='.421' stopColor='#757575' />
                <stop offset='.507' stopColor='#7f7f7f' />
                <stop offset='.546' stopColor='#858585' />
                <stop offset='1' stopColor='#ededed' />
            </linearGradient>
            <path
                d='M207.4 33.4h12.5v-1.1h-14.1c-8.8 0-15.9 6.3-15.9 14v29.9c0 4.7 2.7 8.9 6.9 11.4-3.3-2.6-5.3-6.2-5.3-10.4V47.4c-.1-7.7 7.1-14 15.9-14z'
                fill='url(#D)'
            />
            <linearGradient
                id='E'
                gradientUnits='userSpaceOnUse'
                x1='204.071'
                y1='148.225'
                x2='204.071'
                y2='76.058'
            >
                <stop offset='0' stopColor='#4d4f50' />
                <stop offset='.084' stopColor='#505152' />
                <stop offset='.135' stopColor='#585a5b' />
                <stop offset='.177' stopColor='#666869' />
                <stop offset='.213' stopColor='#7a7c7d' />
                <stop offset='.23' stopColor='#868788' />
                <stop offset='.264' stopColor='#7c7d7e' />
                <stop offset='.321' stopColor='#636364' />
                <stop offset='.395' stopColor='#393a3a' />
                <stop offset='.421' stopColor='#292929' />
                <stop offset='.507' stopColor='#333' />
                <stop offset='.546' stopColor='#393939' />
                <stop offset='.754' stopColor='#a1a1a1' />
                <stop offset='.757' stopColor='#969696' />
                <stop offset='.766' stopColor='#767676' />
                <stop offset='.777' stopColor='#5b5b5b' />
                <stop offset='.789' stopColor='#454545' />
                <stop offset='.802' stopColor='#343434' />
                <stop offset='.819' stopColor='#282828' />
                <stop offset='.843' stopColor='#212121' />
                <stop offset='.907' stopColor='#1f1f1f' />
                <stop offset='.92' stopColor='#272728' />
                <stop offset='.941' stopColor='#2d2d2f' />
                <stop offset='1' stopColor='#2f2f31' />
            </linearGradient>
            <path
                d='M212.3 37.6h-8c-4.7 0-8.6 3.4-8.6 7.5V75c0 2.6 1.5 4.9 3.8 6.2-1.4-1.3-2.3-3.1-2.3-5.1V46.3c0-4.1 3.9-7.5 8.6-7.5h6.6c0-.4-.1-.8-.1-1.2z'
                fill='url(#E)'
            />
            <linearGradient
                id='F'
                gradientUnits='userSpaceOnUse'
                x1='523.526'
                y1='90.666'
                x2='566.202'
                y2='20.857'
            >
                <stop offset='0' stopColor='#979a9c' />
                <stop offset='.084' stopColor='#9a9c9e' />
                <stop offset='.134' stopColor='#a2a5a7' />
                <stop offset='.176' stopColor='#b0b3b4' />
                <stop offset='.212' stopColor='#c4c7c8' />
                <stop offset='.23' stopColor='#d1d3d4' />
                <stop offset='.264' stopColor='#c8c9ca' />
                <stop offset='.321' stopColor='#aeafb0' />
                <stop offset='.395' stopColor='#858686' />
                <stop offset='.421' stopColor='#757575' />
                <stop offset='.507' stopColor='#7f7f7f' />
                <stop offset='.546' stopColor='#858585' />
                <stop offset='1' stopColor='#ededed' />
            </linearGradient>
            <path
                d='M542.3 33.4h-12.5v-1.1h14.1c8.8 0 15.9 6.3 15.9 14v29.9c0 4.7-2.7 8.9-6.9 11.4 3.3-2.6 5.3-6.2 5.3-10.4V47.4c0-7.7-7.1-14-15.9-14z'
                fill='url(#F)'
            />
            <linearGradient
                id='G'
                gradientUnits='userSpaceOnUse'
                x1='545.557'
                y1='148.225'
                x2='545.557'
                y2='76.058'
            >
                <stop offset='0' stopColor='#4d4f50' />
                <stop offset='.084' stopColor='#505152' />
                <stop offset='.135' stopColor='#585a5b' />
                <stop offset='.177' stopColor='#666869' />
                <stop offset='.213' stopColor='#7a7c7d' />
                <stop offset='.23' stopColor='#868788' />
                <stop offset='.264' stopColor='#7c7d7e' />
                <stop offset='.321' stopColor='#636364' />
                <stop offset='.395' stopColor='#393a3a' />
                <stop offset='.421' stopColor='#292929' />
                <stop offset='.507' stopColor='#333' />
                <stop offset='.546' stopColor='#393939' />
                <stop offset='.754' stopColor='#a1a1a1' />
                <stop offset='.757' stopColor='#969696' />
                <stop offset='.766' stopColor='#767676' />
                <stop offset='.777' stopColor='#5b5b5b' />
                <stop offset='.789' stopColor='#454545' />
                <stop offset='.802' stopColor='#343434' />
                <stop offset='.819' stopColor='#282828' />
                <stop offset='.843' stopColor='#212121' />
                <stop offset='.907' stopColor='#1f1f1f' />
                <stop offset='.92' stopColor='#272728' />
                <stop offset='.941' stopColor='#2d2d2f' />
                <stop offset='1' stopColor='#2f2f31' />
            </linearGradient>
            <path
                d='M537.3 37.6h8c4.7 0 8.6 3.4 8.6 7.5V75c0 2.6-1.5 4.9-3.8 6.2 1.4-1.3 2.3-3.1 2.3-5.1V46.3c0-4.1-3.9-7.5-8.6-7.5h-6.6c.1-.4.1-.8.1-1.2z'
                fill='url(#G)'
            />
            <linearGradient
                id='H'
                gradientUnits='userSpaceOnUse'
                x1='374.814'
                y1='130.161'
                x2='374.814'
                y2='-15.784'
            >
                <stop offset='0' stopColor='#868788' />
                <stop offset='.03' stopColor='#7c7d7e' />
                <stop offset='.081' stopColor='#636364' />
                <stop offset='.146' stopColor='#393a3a' />
                <stop offset='.169' stopColor='#292929' />
                <stop offset='.252' stopColor='#333' />
                <stop offset='.29' stopColor='#393939' />
                <stop offset='.475' stopColor='#a1a1a1' />
                <stop offset='.48' stopColor='#969696' />
                <stop offset='.495' stopColor='#767676' />
                <stop offset='.512' stopColor='#5b5b5b' />
                <stop offset='.531' stopColor='#454545' />
                <stop offset='.553' stopColor='#343434' />
                <stop offset='.58' stopColor='#282828' />
                <stop offset='.619' stopColor='#212121' />
                <stop offset='.721' stopColor='#1f1f1f' />
                <stop offset='.76' stopColor='#272728' />
                <stop offset='.823' stopColor='#2d2d2f' />
                <stop offset='1' stopColor='#2f2f31' />
            </linearGradient>
            <path
                d='M543.8 87.9H422.6c-1.6 0-6.6.3-11.2 3.9-7.9 6.3-20.4 11.2-35.7 11.2h-2c-15.3 0-27.7-4.9-35.7-11.2-4.6-3.6-9.5-3.9-11.2-3.9h-121c-8.8 0-15.9-6.3-15.9-13.9v2.2c0 7.7 7.1 13.9 15.9 13.9h121.1c1.6 0 6.6.3 11.2 3.9 7.9 6.3 20.4 11.2 35.7 11.2h2c15.3 0 27.7-4.9 35.7-11.2 4.6-3.6 9.5-3.9 11.2-3.9h121.2c8.8 0 15.9-6.3 15.9-13.9V74c-.1 7.6-7.2 13.8-16 13.9z'
                fill='url(#H)'
            />
            <linearGradient
                id='I'
                gradientUnits='userSpaceOnUse'
                x1='374.816'
                y1='-5.821'
                x2='374.816'
                y2='103.584'
            >
                <stop offset='0' stopColor='#979a9c' />
                <stop offset='.084' stopColor='#9a9c9e' />
                <stop offset='.134' stopColor='#a2a5a7' />
                <stop offset='.176' stopColor='#b0b3b4' />
                <stop offset='.212' stopColor='#c4c7c8' />
                <stop offset='.23' stopColor='#d1d3d4' />
                <stop offset='.264' stopColor='#c8c9ca' />
                <stop offset='.321' stopColor='#aeafb0' />
                <stop offset='.395' stopColor='#858686' />
                <stop offset='.421' stopColor='#757575' />
                <stop offset='.507' stopColor='#7f7f7f' />
                <stop offset='.546' stopColor='#858585' />
                <stop offset='1' stopColor='#ededed' />
            </linearGradient>
            <path
                d='M543.8 83.7H422.7c-2.7 0-9.6.5-16.1 5.6-6.6 5.2-17.3 9.5-30.8 9.5h-2c-13.5 0-24.2-4.4-30.8-9.5-6.5-5.1-13.4-5.6-16.1-5.6H205.8c-4.7 0-8.6-3.4-8.6-7.5v2.1c0 4.1 3.9 7.5 8.6 7.5h121.1c2.6 0 9.6.5 16.1 5.6 6.6 5.2 17.3 9.5 30.8 9.5h2c13.5 0 24.2-4.4 30.8-9.5 6.4-5.1 13.4-5.6 16.1-5.6h121.1c4.7 0 8.6-3.4 8.6-7.5v-2.2c0 4.2-3.9 7.6-8.6 7.6z'
                fill='url(#I)'
            />
            <linearGradient
                id='J'
                gradientUnits='userSpaceOnUse'
                x1='374.643'
                y1='62.307'
                x2='374.643'
                y2='14.826'
            >
                <stop offset='0' stopColor='#979a9c' />
                <stop offset='.038' stopColor='#9a9c9e' />
                <stop offset='.061' stopColor='#a2a5a7' />
                <stop offset='.079' stopColor='#b0b3b4' />
                <stop offset='.096' stopColor='#c4c7c8' />
                <stop offset='.104' stopColor='#d1d3d4' />
                <stop offset='.115' stopColor='#ccc9ca' />
                <stop offset='.133' stopColor='#c0afb0' />
                <stop offset='.156' stopColor='#ac8585' />
                <stop offset='.183' stopColor='#914a4b' />
                <stop offset='.208' stopColor='#750f0f' />
                <stop offset='.233' stopColor='#771919' />
                <stop offset='.276' stopColor='#7d3333' />
                <stop offset='.322' stopColor='#855656' />
                <stop offset='.426' stopColor='#edd3d3' />
                <stop offset='.428' stopColor='#e2caca' />
                <stop offset='.433' stopColor='#c2b1b1' />
                <stop offset='.439' stopColor='#a79b9b' />
                <stop offset='.446' stopColor='#918989' />
                <stop offset='.454' stopColor='#807c7c' />
                <stop offset='.464' stopColor='#747272' />
                <stop offset='.477' stopColor='#6d6d6d' />
                <stop offset='.514' stopColor='#6b6b6b' />
                <stop offset='.523' stopColor='#898989' />
                <stop offset='.535' stopColor='#a8a8a8' />
                <stop offset='.549' stopColor='#c4c4c4' />
                <stop offset='.564' stopColor='#dadada' />
                <stop offset='.582' stopColor='#ebebeb' />
                <stop offset='.604' stopColor='#f6f6f6' />
                <stop offset='.635' stopColor='#fdfdfd' />
                <stop offset='.721' stopColor='#fff' />
                <stop offset='.747' stopColor='#fcfcfc' />
                <stop offset='.767' stopColor='#f2f2f3' />
                <stop offset='.784' stopColor='#e2e2e3' />
                <stop offset='.8' stopColor='#cbcbcc' />
                <stop offset='.816' stopColor='#adadaf' />
                <stop offset='.831' stopColor='#89898c' />
                <stop offset='.836' stopColor='#7a7a7d' />
            </linearGradient>
            <path d='M203.7 22h341.8v31.6H203.7z' fill='url(#J)' />
            <path
                d='M498 182.6h78.4c7.6 0 13.8 8.9 13.8 19.9s-6.2 19.9-13.8 19.9H498c-7.6 0-13.8-8.9-13.8-19.9s6.2-19.9 13.8-19.9z'
                fill='#cecee0'
            />
            <path
                d='M545.4 190.7h16.9c4.5 0 8.2 5.3 8.2 11.8s-3.7 11.8-8.2 11.8h-16.9c-4.5 0-8.2-5.3-8.2-11.8s3.7-11.8 8.2-11.8z'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <path
                d='M490.5 587h78.4c7.6 0 13.8 9.3 13.8 20.8s-6.2 20.8-13.8 20.8h-78.4c-7.6 0-13.8-9.3-13.8-20.8s6.2-20.8 13.8-20.8z'
                fill='#cecee0'
            />
            <path
                d='M537.9 595.5h16.9c4.5 0 8.2 5.5 8.2 12.3s-3.7 12.3-8.2 12.3h-16.9c-4.5 0-8.2-5.5-8.2-12.3s3.7-12.3 8.2-12.3zM158.2 124h45.6c4.5 0 8.2 5.3 8.2 11.8s-3.7 11.8-8.2 11.8h-45.6c-4.5 0-8.2-5.3-8.2-11.8s3.7-11.8 8.2-11.8zm0 68.3h155.7c4.5 0 8.2 5.3 8.2 11.8s-3.7 11.8-8.2 11.8H158.2c-4.5 0-8.2-5.3-8.2-11.8s3.7-11.8 8.2-11.8zm0 61.4h155.7c4.5 0 8.2 5.6 8.2 12.6 0 6.9-3.7 12.6-8.2 12.6H158.2c-4.5 0-8.2-5.6-8.2-12.6s3.7-12.6 8.2-12.6z'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <path
                d='M158.2 327.5h45.6c4.5 0 8.2 5.2 8.2 11.6s-3.7 11.6-8.2 11.6h-45.6c-4.5 0-8.2-5.2-8.2-11.6 0-6.5 3.7-11.6 8.2-11.6zm0 60.1h112.1c4.5 0 8.2 6.3 8.2 14.1s-3.7 14.1-8.2 14.1H158.2c-4.5 0-8.2-6.3-8.2-14.1s3.7-14.1 8.2-14.1zm-4 69h155.7c4.5 0 8.2 5.8 8.2 13s-3.7 13-8.2 13H154.2c-4.5 0-8.2-5.8-8.2-13s3.7-13 8.2-13z'
                opacity='.5'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <path
                d='M158.2 536.6h45.6c4.5 0 8.2 5.3 8.2 11.9s-3.7 11.9-8.2 11.9h-45.6c-4.5 0-8.2-5.3-8.2-11.9s3.7-11.9 8.2-11.9zm-4 58.9h155.7c4.5 0 8.2 5.5 8.2 12.3s-3.7 12.3-8.2 12.3H154.2c-4.5 0-8.2-5.5-8.2-12.3s3.7-12.3 8.2-12.3zm4 59.8h90.6c4.5 0 8.2 5.3 8.2 11.9s-3.7 11.9-8.2 11.9h-90.6c-4.5 0-8.2-5.3-8.2-11.9s3.7-11.9 8.2-11.9z'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
            <path
                d='M123.8 299.1h501.6M123.8 509.2h501.6'
                opacity='.7'
                enableBackground='new'
                fill='none'
                stroke='#3f3d56'
                strokeLinecap='round'
                strokeMiterlimit='10'
            />
            <path
                d='M505.5 384.2h78.4c7.6 0 13.8 8.9 13.8 19.9s-6.2 19.9-13.8 19.9h-78.4c-7.6 0-13.8-8.9-13.8-19.9s6.2-19.9 13.8-19.9z'
                fill='#cecee0'
            />
            <path
                d='M529 415.9h-16.9c-4.5 0-8.2-5.3-8.2-11.8s3.7-11.8 8.2-11.8H529c4.5 0 8.2 5.3 8.2 11.8s-3.6 11.8-8.2 11.8z'
                fill='var(--primary)'
                style={{ transition: 'fill 0.2s ease-in-out' }}
            />
        </svg>
    );
};

export default TaskIcon;
