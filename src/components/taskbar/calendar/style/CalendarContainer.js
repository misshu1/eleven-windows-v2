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

export const CalendarContainer = styled.section`
    font-family: 'Roboto', sans-serif;
    user-select: none;
    z-index: 250;
    position: absolute;
    border-top: 1px solid ${props => props.theme.calendarBorder};
    border-left: 1px solid ${props => props.theme.calendarBorder};
    bottom: 0;
    right: 0;
    width: 21.87rem;
    background: ${props => props.theme.calendarBg};
    animation: ${slideUp} 0.3s ease-out 1 forwards;
`;
