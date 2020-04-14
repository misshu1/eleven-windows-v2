import styled, { css, keyframes } from 'styled-components';

const moveLeft = keyframes`
0% {
    opacity: 1;
    transform: translate3d(1rem, -50%, 0);
}
99% {
    opacity: 1;
}
100% {
    opacity: 0;
    transform: translate3d(0, -50%, 0);
}
`;

const moveRight = keyframes`
0% {
    opacity: 1;
    transform: translate3d(0, -50%, 0);
}
100% {
    opacity: 1;
    transform: translate3d(1rem, -50%, 0);
}
`;

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translate3d(1rem, -50%, 0);
    height: 3.5rem;
    width: 3.5rem;
    background: ${(props) => props.theme.background};
    border-radius: 0.5rem;

    ${(props) =>
        props.isMenuOpen === true &&
        css`
            animation: ${moveLeft} 0.1s ease-out 1 forwards;
        `}

    ${(props) =>
        props.isMenuOpen === false &&
        css`
            opacity: 0;
            animation: ${moveRight} 0.1s ease-out 1 forwards;
            animation-delay: 0.25s;
        `}
`;
