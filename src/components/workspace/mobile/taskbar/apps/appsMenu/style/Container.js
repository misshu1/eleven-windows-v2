import styled, { css, keyframes } from 'styled-components';

const slideUp = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
}
100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
`;

export const Container = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.startMenuBg};
    color: ${(props) => props.theme.startMenuColor};
    user-select: none;
    z-index: 250;
    animation: ${slideUp} 0.4s ease-out 1 forwards;
    backdrop-filter: blur(4px);

    ${(props) =>
        props.isAuthOpen &&
        css`
            padding: 0.5rem;
        `}

    .widgets-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 5.5rem);
        grid-template-rows: repeat(auto-fill, 5.5rem);
        grid-auto-flow: row;
        grid-gap: 2rem;
        justify-content: center;
        align-content: center;
        user-select: none;
        color: #d6d8de;
        height: 100%;
        width: 100%;
        padding: 1rem;
    }
`;
