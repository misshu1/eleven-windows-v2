import styled, { css, keyframes } from 'styled-components';
import { zIndex } from 'components/theme/zIndex';

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
    width: 100%;
    height: 100%;
    max-width: 22rem;
    max-height: 45.5rem;
    top: auto;
    left: 0;
    bottom: 0;
    border-top: 1px solid var(--border);
    border-right: 1px solid var(--border);
    background-color: var(--backgroundTransparent);
    backdrop-filter: blur(4px);
    color: var(--colorDefault);
    user-select: none;
    z-index: ${zIndex.windows.startMenu};
    animation: ${slideUp} 0.4s ease-out 1 forwards;
    box-shadow: 2px -2px 4px -1px rgba(0, 0, 0, 0.2),
        4px -4px 5px 0px rgba(0, 0, 0, 0.14),
        1px -1px 10px 0px rgba(0, 0, 0, 0.12);

    ${(props) =>
        props.isAuthOpen &&
        css`
            padding: 0.5rem;
        `}

    .menu-container {
        display: flex;
        flex: 1;
    }
`;
