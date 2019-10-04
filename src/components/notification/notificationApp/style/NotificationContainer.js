import styled, { keyframes } from 'styled-components';

const slideLeft = keyframes`
0% {
    opacity: 0;
    transform: translate3d(90%, 0, 0);
}

30% {

    opacity: 1;
}
100% {
    transform: translate3d(0, 0, 0);
}
`;

export const NotificationContainer = styled.section`
    z-index: 250;
    display: flex;
    flex-direction: column;
    cursor: default;
    user-select: none;
    border-left: 1px solid ${props => props.theme.notificationBorder};

    .clear {
        width: fit-content;
        margin-left: auto;
        font-size: 0.9rem;
        color: ${props => props.theme.calendarTodayClock};
    }
    .clear:hover {
        color: ${props => props.theme.calendarColorSecondary};
    }

    @media (min-width: 28rem) {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 21.87rem;
        background: ${props => props.theme.notificationBg};
        color: ${props => props.theme.notificationColor};
        animation: ${slideLeft} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1
            forwards;
    }
`;
