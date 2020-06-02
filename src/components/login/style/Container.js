import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
0% {
    transform: scale(1);
}
40% {
    filter: blur(0) brightness(1) grayscale(0);
}
100% {
    filter: blur(16px) brightness(0.75) grayscale(0.2);
    transform: scale(1.2);
}
`;

const fadeOut = keyframes`
0% {
    filter: blur(16px) brightness(0.75) grayscale(0.2);
    transform: scale(1.2);
}
60% {
    filter: blur(0) brightness(1) grayscale(0);
}
100% {
    transform: scale(1);
}
`;

export const Container = styled.section`
    z-index: 10;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    &&::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: ${(props) => props.background};
        overflow: hidden;

        ${(props) =>
            props.animateInOut &&
            css`
                animation: ${fadeIn} 0.8s ease-in 1 forwards;
            `}
        ${(props) =>
            !props.animateInOut &&
            css`
                animation: ${fadeOut} 0.8s ease-in 1 forwards;
            `}
    }
`;
