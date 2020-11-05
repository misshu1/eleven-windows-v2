import styled, { keyframes } from 'styled-components';
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
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: ${zIndex.mobile.cart};
    background-color: var(--backgroundTransparent);
    width: 100%;
    height: 100%;
    color: var(--colorDefault);
    animation: ${slideUp} 0.4s ease-out 1 forwards;
    padding: 0.5rem;
    backdrop-filter: blur(4px);
`;
