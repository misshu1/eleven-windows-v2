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
    background: ${props => props.theme.calendarBg};
    width: 100%;
    height: 100%;
    color: ${props => props.theme.startMenuColor};
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    animation: ${slideUp} 0.4s ease-out 1 forwards;

    @media (min-width: 28rem) {
        max-width: 21.87rem;
        max-height: 35rem;
        top: auto;
        left: auto;
        bottom: 0;
        right: 0;
        border-top: 1px solid ${props => props.theme.startMenuBorder};
        border-left: 1px solid ${props => props.theme.startMenuBorder};
        box-shadow: 2px -2px 4px -1px rgba(0, 0, 0, 0.2),
            4px -4px 5px 0px rgba(0, 0, 0, 0.14),
            1px -1px 10px 0px rgba(0, 0, 0, 0.12);
    }
`;
