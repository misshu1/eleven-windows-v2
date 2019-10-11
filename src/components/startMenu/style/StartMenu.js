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

export const StartMenu = styled.section`
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: ${props => props.theme.startMenuBg};
    color: ${props => props.theme.startMenuColor};
    transition: background 0.2s ease-in-out;
    user-select: none;
    z-index: 250;
    animation: ${slideUp} 0.4s ease-out 1 forwards;

    @media (min-width: 28rem) {
        max-width: 21.87rem;
        max-height: 45.5rem;
        top: auto;
        bottom: 0;
        border-top: 1px solid ${props => props.theme.startMenuBorder};
        border-right: 1px solid ${props => props.theme.startMenuBorder};
        box-shadow: 2px -2px 4px -1px rgba(0, 0, 0, 0.2),
            4px -4px 5px 0px rgba(0, 0, 0, 0.14),
            1px -1px 10px 0px rgba(0, 0, 0, 0.12);
    }
`;
