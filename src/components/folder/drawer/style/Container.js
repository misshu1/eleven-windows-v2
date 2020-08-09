import styled, { keyframes } from 'styled-components';

const slideFromLeft = keyframes`
0% {
    opacity: 0;
    transform: translate3d(-90%, 0, 0);
    transform-origin: left;
}

30% {
    opacity: 1;
}
100% {
    transform: translate3d(0, 0, 0);
}
`;

const slideFromRight = keyframes`
0% {
    opacity: 0;
    transform: translate3d(10%, 0, 0);
    transform-origin: right;
}

30% {
    opacity: 1;

}
100% {

    transform: translate3d(0, 0, 0);
}
`;

export const Container = styled.div`
    position: absolute;
    color: var(--colorDefault);
    background: var(--background);
    width: 20rem;
    height: 100%;
    border-left: 1px solid var(--border);
    z-index: 1000;
    right: 0;
    top: 0;
    bottom: 0;
    left: auto;
    animation: ${slideFromRight} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1
        forwards;

    && img {
        height: 2rem;
        width: 2rem;
    }

    @media only screen and (max-width: 320px) {
        width: 100%;
    }

    @media only screen and (min-width: 450px) {
        right: auto;
        left: 0;
        animation: ${slideFromLeft} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1
            forwards;
        border-right: 1px solid var(--border);
        border-left: none;
    }
`;
