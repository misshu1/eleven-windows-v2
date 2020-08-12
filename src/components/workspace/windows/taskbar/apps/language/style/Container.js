import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, 50%, 0);
}
100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
`;

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-height: 20rem;
    z-index: 250;
    position: absolute;
    user-select: none;
    border-top: 1px solid var(--border);
    border-left: 1px solid var(--border);
    bottom: 0;
    right: 0;
    width: 22rem;
    background-color: var(--backgroundTransparent);
    animation: ${slideUp} 0.3s ease-out 1 forwards;
    box-shadow: -2px -2px 4px -1px rgba(0, 0, 0, 0.2),
        -4px -4px 5px 0px rgba(0, 0, 0, 0.14),
        -1px -1px 10px 0px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(4px);
`;
