import styled, { css, keyframes } from 'styled-components';

const expand = keyframes`
0% {
    opacity: 1;
    transform: scale3d(1, 0, 1)
}
100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
}
`;

const shrink = keyframes`
0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
}
99% {
    opacity: 1;
}
100% {
    opacity: 0;
    transform: scale3d(1, 0, 1)
}
`;

export const IconsMenu = styled.div`
    position: absolute;
    opacity: 0;
    z-index: 150;
    top: 0;
    left: 0;
    height: 100%;
    width: 3.5rem;
    background: ${(props) => props.theme.background};
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em;
    box-shadow: 2px -2px 4px -1px rgba(0,0,0,0.2), 
    4px -4px 5px 0px rgba(0,0,0,0.14), 
    1px -1px 10px 0px rgba(0,0,0,0.12);

    ${(props) =>
        props.isMenuOpen === null &&
        css`
            display: none;
        `}

    ${(props) =>
        props.isMenuOpen === true &&
        css`
            animation: ${expand} 0.3s ease-out 1 forwards;
            animation-delay: 0.05s;
        `}

    ${(props) =>
        props.isMenuOpen === false &&
        css`
            opacity: 1;
            animation: ${shrink} 0.3s ease-in 1 forwards;
            animation-delay: 0.25s;
        `}
`;
