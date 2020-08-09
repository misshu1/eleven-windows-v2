import styled, { keyframes } from 'styled-components';

const slideLeft = keyframes`
0% {
    opacity: 0;
    transform: translate3d(90%, 0, 0);
}

30% {

    opacity: 1;
}
100% {
    transform: translate3d(0, 0, 0);
}
`;

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
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0 0.5rem;
    height: 100%;
    width: 100%;
    z-index: 250;
    cursor: default;
    user-select: none;
    background-color: var(--backgroundTransparent);
    color: var(--colorDefault);
    animation: ${slideUp} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1 forwards;
    backdrop-filter: blur(4px);

    @media only screen and (min-width: 450px) {
        width: 21.87rem;
        border-left: 1px solid var(--border);
        box-shadow: -2px 0px 4px -1px rgba(0, 0, 0, 0.2),
            -4px 0px 5px 0px rgba(0, 0, 0, 0.14),
            -1px 0px 10px 0px rgba(0, 0, 0, 0.12);
        animation: ${slideLeft} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1
            forwards;
    }
`;
