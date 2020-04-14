import styled, { css, keyframes } from 'styled-components';

const expand = keyframes`
0% {
    visibility: visible;
    transform: scale3d(1, 0, 1)
}
100% {
    visibility: visible;
    transform: scale3d(1, 1, 1);
}
`;

const shrink = keyframes`
0% {
    visibility: visible;
    transform: scale3d(1, 1, 1);
}
99% {
    visibility: visible;
}
100% {
    visibility: hidden;
    transform: scale3d(1, 0, 1)
}
`;

export const ExpandedMenuIcons = styled.div`
    position: absolute;
    visibility: hidden;
    z-index: 150;
    top: 0;
    left: 0;
    height: 100%;
    width: 3.5rem;
    background: ${(props) => props.theme.background};
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;

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
            animation: ${shrink} 0.3s ease-out 1 forwards;
        `}
`;
