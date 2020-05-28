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
`;
