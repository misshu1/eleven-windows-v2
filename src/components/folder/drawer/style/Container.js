import styled, { keyframes } from 'styled-components';

const slide = keyframes`
0% {
    opacity: 0;
    transform: translate3d(-90%, 0, 0);
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
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.background};
    width: 20rem;
    height: 100%;
    border-right: 1px solid ${(props) => props.theme.folderBorder};
    z-index: 1000;
    animation: ${slide} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1 forwards;

    && img {
        height: 2rem;
        width: 2rem;
    }

    @media only screen and (max-width: 320px) {
        width: 100%;
    }
`;
