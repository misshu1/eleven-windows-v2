import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

* {
    box-sizing: border-box;
}

html {
    height: 100%;
    font-size: 16px;
}

body {
    font-family: 'Roboto', sans-serif;
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: ${(props) => props.background} var(--black80);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

#pages {
    position: relative;
    z-index: 500;
}

#desktop {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;

    ${(props) =>
        props.renderStyles &&
        css`
            ${props.linux &&
            css`
                height: 100%;
            `}
            ${(props.windows || props.mobile) &&
            css`
                height: calc(100% - 3.5rem);
            `}
        `}
}

#taskbar {
    ${(props) =>
        props.renderStyles &&
        css`
            background-color: var(--background);
            z-index: 300;
            height: 3.5rem;
            user-select: none;
            overflow: hidden;

            ${props.linux &&
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

            ${(props.windows || props.mobile) &&
            css`
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
                    0px -4px 5px 0px rgba(0, 0, 0, 0.14),
                    0px -1px 10px 0px rgba(0, 0, 0, 0.12);
            `}
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
