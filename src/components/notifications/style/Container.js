import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0% {
     opacity: 0;
}
100% {
    opacity: 1;
}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.notificationColor};

    .notifications-container {
        padding: 0.6rem;
        flex: 1;
    }

    .clear {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4rem;
        font-size: 1.1rem;
        color: ${(props) => props.theme.calendarTodayClock};
    }

    .no-notifications {
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        animation: ${fadeIn} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1 forwards;
        animation-delay: 0.25s;
    }

    @media only screen and (min-width: 450px) {
        .clear {
            justify-content: flex-end;
            padding-right: 1rem;
            height: 3rem;
            font-size: 0.9rem;
        }

        .clear:hover {
            color: ${(props) => props.theme.calendarColorSecondary};
        }
    }
`;
