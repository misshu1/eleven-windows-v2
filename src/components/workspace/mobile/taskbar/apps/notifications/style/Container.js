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
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 0.5rem;
    height: 100%;
    width: 100%;
    z-index: 250;
    cursor: default;
    user-select: none;
    background: ${(props) => props.theme.notificationBg};
    animation: ${slideUp} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1 forwards;
    backdrop-filter: blur(4px);
`;
