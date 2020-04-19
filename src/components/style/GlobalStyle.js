import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Kalam|Roboto:100,400|Source+Sans+Pro&display=swap');
${normalize}


* {
    box-sizing: border-box;
}

html {
    height: 100%;
    font-size: ${(props) => props.size}%;
}

body {
    font-family: 'Source Sans Pro', sans-serif;
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.desktopBg[props.background]};
}

#desktop {
    ${(props) =>
        props.linux &&
        css`
            height: 100%;
        `}
    ${(props) =>
        props.windows &&
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
        props.windows &&
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
`;
