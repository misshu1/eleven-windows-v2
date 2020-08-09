import styled, { keyframes } from 'styled-components';

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
    z-index: 250;
    position: absolute;
    user-select: none;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--backgroundTransparent);
    width: 100%;
    height: 100%;
    color: var(--colorDefault);
    animation: ${slideUp} 0.4s ease-out 1 forwards;
    padding: 0.5rem;
    backdrop-filter: blur(4px);

    @media only screen and (min-width: 450px) {
        max-width: 21.87rem;
        max-height: 35rem;
        top: auto;
        left: auto;
        bottom: 0;
        right: 0;
        border-top: 1px solid var(--border);
        border-left: 1px solid var(--border);
        box-shadow: 2px -2px 4px -1px rgba(0, 0, 0, 0.2),
            4px -4px 5px 0px rgba(0, 0, 0, 0.14),
            1px -1px 10px 0px rgba(0, 0, 0, 0.12);
    }
`;
