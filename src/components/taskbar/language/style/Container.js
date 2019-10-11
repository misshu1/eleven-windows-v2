import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, 50%, 0);
}
100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
`;

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-height: 20rem;
    z-index: 200;
    position: absolute;
    user-select: none;
    border-top: 1px solid ${props => props.theme.calendarBorder};
    border-left: 1px solid ${props => props.theme.calendarBorder};
    bottom: 0;
    right: 0;
    width: 21.87rem;
    background: ${props => props.theme.calendarBg};
    transition: background 0.2s ease-in-out;
    animation: ${slideUp} 0.3s ease-out 1 forwards;
    box-shadow: -2px -2px 4px -1px rgba(0, 0, 0, 0.2),
        -4px -4px 5px 0px rgba(0, 0, 0, 0.14),
        -1px -1px 10px 0px rgba(0, 0, 0, 0.12);
`;
