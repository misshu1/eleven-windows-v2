import styled, { css, keyframes } from 'styled-components';

const slideRight = keyframes`
0% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
}
100% {
    opacity: 1;
    transform: translate3d(0 , 0, 0);
}
`;

const slideLeft = keyframes`
0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
99% {
    opacity: 1;
}
100% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
`;

const animateSVGGradiant = keyframes`
0% {
    stop-color: ${(props) => props.theme.accentBg};
}
50% {
    stop-color: transparent;
}
100% {
    stop-color: ${(props) => props.theme.accentBg};
}
`;

export const ExpandedMenu = styled.div`
    background: ${(props) => props.theme.startMenuBg};
    padding-left: 3.5rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 149;
    opacity: 0;
    svg {
        opacity: 0;
        display: none;
    }

    ${(props) =>
        props.isMenuOpen === null &&
        css`
            display: none;
        `}

    ${(props) =>
        props.isMenuOpen === true &&
        css`
            animation: ${slideRight} 0.3s ease-out 1 forwards;
            animation-delay: 0.3s;
        `}

    ${(props) =>
        props.isMenuOpen === false &&
        css`
            animation: ${slideLeft} 0.3s ease-in 1 forwards;
        `}

    @media (min-width: 28rem) {
        width: 21.87rem;
        height: 100%;

        svg {
            display: block;
            position: absolute;
            left: 100%;
            height: 100%;
            background-size: cover;
            background-position: right;
            z-index: 145;

            ${(props) =>
                props.isMenuOpen === null &&
                css`
                    display: none;
                `}

            ${(props) =>
                props.isMenuOpen === true &&
                css`
                    animation: ${slideRight} 0.1s 1 forwards;
                    animation-delay: 0.05s;
                `}

            ${(props) =>
                props.isMenuOpen === false &&
                css`
                    opacity: 1;
                    animation: ${slideLeft} 0.15s 1 forwards;
                    animation-delay: 0.15s;
                `}

            #gradiant {
                stop {
                    animation: ${animateSVGGradiant} 3s infinite;
                }
            }
        }
    }
`;
