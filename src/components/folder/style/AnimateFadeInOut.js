import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
}
100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
}
`;

const fadeOut = keyframes`
0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
}
100% {
    opacity: 0;
    transform: scale3d(0.7, 0.7, 0.7);
}
`;

const minimizeDown = keyframes`
0% {
    opacity: 1;
    transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
    transform-origin: 50% 100%;
}
100% {
    opacity: 0;
    transform: scale3d(0, 1, 1) translate3d(0, 55rem, 0);
}
`;

const minimizeUp = keyframes`
0% {
    opacity: 0;
    transform: scale3d(0, 1, 1) translate3d(0, 55rem, 0);
    transform-origin: 50% 100%;
}
100% {
    opacity: 1;
    transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
    transform-origin: 50% 100%;
}
`;

const hide = keyframes`
0% {
    width: 100%;
    height: 100%;    
}
100% {
    height: 0px;
    width: 0px;
}
`;

export const AnimateFadeInOut = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${({ appIndex }) => appIndex};

    @media only screen and (min-width: 450px) {
        ${({ isMaximize, height, width }) =>
            !isMaximize &&
            css`
                height: ${height ? height : '44rem'};
                width: ${width ? width : '44rem'};
            `}

        ${({ isMaximize }) =>
            isMaximize &&
            css`
                transform: translate(0, 0) !important;
            `}

        ${({ minimize }) =>
            minimize &&
            css`
                animation: ${hide} 0s 1 forwards;
                animation-delay: 0.3s;
            `}

        .folder {
            ${({ open }) =>
                open === true &&
                css`
                    animation: ${fadeIn} 0.2s ease-out 1 forwards;
                `}
            ${({ minimize }) =>
                minimize === true &&
                css`
                    animation: ${minimizeDown} 0.3s ease-in 1 forwards;
                `}
            ${({ minimize }) =>
                minimize === false &&
                css`
                    animation: ${minimizeUp} 0.3s ease-out 1 forwards;
                `}
            ${({ close }) =>
                close === true &&
                css`
                    animation: ${fadeOut} 0.2s ease 1 forwards;
                `}
            ${({ isActive }) =>
                isActive &&
                css`
                    box-shadow: 0px 0px 0px 1px var(--almostDarkblue60),
                        0px 0px 15px 1px rgba(0, 0, 0, 0.75);
                `};
        }
    }

    @media only screen and (max-height: 650px) {
        height: 100%;
    }
`;
