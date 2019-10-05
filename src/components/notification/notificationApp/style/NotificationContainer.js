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

const slideDown = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, -80%, 0);
}
80% {
    opacity: .5;
}
90% {
    opacity: .8;
}
95% {
    opacity: 1;
}
100% {
    transform: translate3d(0, 0, 0);
}
`;

export const NotificationContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 250;
    cursor: default;
    user-select: none;
    background: ${props => props.theme.notificationBg};
    color: ${props => props.theme.notificationColor};

    @media (max-width: 28rem) {
        animation: ${slideDown} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1
            forwards;
        .clear {
            width: fit-content;
            margin: 1.5rem auto;
            font-size: 1.1rem;
            color: ${props => props.theme.calendarTodayClock};
        }
    }

    @media (min-width: 28rem) {
        width: 21.87rem;
        border-left: 1px solid ${props => props.theme.notificationBorder};
        animation: ${slideLeft} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1
            forwards;
        .clear {
            width: fit-content;
            margin-left: auto;
            font-size: 0.9rem;
            color: ${props => props.theme.calendarTodayClock};
        }
        .clear:hover {
            color: ${props => props.theme.calendarColorSecondary};
        }
    }
`;
