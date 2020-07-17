import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400|Source+Sans+Pro&display=swap'); */
${normalize}


:root {
    --linuxCloseBtn: #ff605c;
    --linuxMinimizeBtn: #00ca4e;
    --linuxMaximizeBtn: #ffbd44;

    --white: #ffffff;
    --white95: #fafafa;
    --white90: #f5f5f5;
    --white85: #f2f2f2;
    --white80: #e6e6e8;
    --white60: #d6d8de;
    --white40: #c9ccd4;

    --black: #000000;
    --black95: #0f0f0f;
    --black90: #101010;
    --black85: #212121;
    --black80: #202020;
    --black60: #363636;
    --black40: #444444;

    --grey80: #787878;
    --grey60: #878686;
    --grey40: #969696;
    --grey20: #bababa;

    --hoverBgLight: rgba(255, 255, 255, 0.1);
    --hoverBgLight80: rgba(200, 200, 200, 0.2);
    --hoverBgLight60: rgba(100, 100, 100, 0.3);
    --hoverBgDark: rgba(0, 0, 0, 0.3);
    --hoverBgBlue: rgba(0, 21, 255, 0.2);

    --almostRed: #AF0138;
    --almostRed60: #9e0938;
    --almostRed40: #910d37;
    --almostRedLight: #d7809b;
    --almostRedDark: #960124;

    --almostBlue: #009BCE;
    --almostBlue60: #0892bf;
    --almostBlue40: #006edc;
    --almostBlueLight: #99aeff;
    --almostBlueDark: #0668c9;

    --almostOrange: #CF6900;
    --almostOrange60: #BD4C00;
    --almostOrange40: #ab4602;
    --almostOrangeLight: #F1D2B3;
    --almostOrangeDark: #7a3100;

    --almostGreen: #26c11b;
    --almostGreen60: #14851E;
    --almostGreen40: #209c17;
    --almostGreenLight: #B9DABC;
    --almostGreenDark: #0B6812;

    --almostPink: #FF0352;
    --almostPink60: #e3003a;
    --almostPink40: #DB1654;
    --almostPinkLight: #FFB3CB;
    --almostPinkDark: #bf1d50;

    /* TaskBar */
    /* Folder */
    /* Desktop */
    /* Buttons */
    /* Font */
}


* {
    box-sizing: border-box;
}

html {
    height: 100%;
    font-size: 16px;
}

body {
    font-family: 'Source Sans Pro', sans-serif;
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: ${(props) => props.background};
}

#pages {
    position: relative;
    z-index: 500;
}

#desktop {
    ${(props) =>
        props.linux &&
        css`
            height: 100%;
        `}
    ${(props) =>
        (props.windows || props.mobile) &&
        css`
            height: calc(100% - 3.5rem);
        `}
    position: relative;
    width: 100%;
    overflow: hidden;
}

#taskbar {
    background: ${(props) => props.theme.background};
    z-index: 300;
    height: 3.5rem;
    user-select: none;
    overflow: hidden;
    
    ${(props) =>
        props.linux &&
        css`
            position: absolute;
            bottom: 0.5rem;
            left: 0.5rem;
            right: 0.5rem;
            width: max-content;
            margin: 0 auto;
            border-radius: 0.5rem;
            box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.2),
                0px 0px 6px 0px rgba(0, 0, 0, 0.14),
                0px 0px 12px 0px rgba(0, 0, 0, 0.12);
        `}

    ${(props) =>
        (props.windows || props.mobile) &&
        css`
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
                0px -4px 5px 0px rgba(0, 0, 0, 0.14),
                0px -1px 10px 0px rgba(0, 0, 0, 0.12);
        `}
}

#modal {
    z-index: 200;
    position: relative;
}

#video {
    z-index: -100;
}

@media only screen and (min-width: 1901px) {
    html {
        font-size: 16px;
    }
}

@media only screen and (min-width: 1401px) and (max-width: 1900px) {
    html {
        font-size: 15px;
    }
}

@media only screen and (min-width: 901px) and (max-width: 1400px) {
    html {
        font-size: 14px;
    }
}

@media only screen and (max-width: 900px) {
    html {
        font-size: 13px;
    }
}
`;
