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
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;

    .heading-name {
        height: 7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;
    }

    .no-notifications {
        position: absolute;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        animation: ${fadeIn} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1 forwards;
        animation-delay: 0.25s;
    }
    .clear {
        width: max-content;
        margin: 1.5rem auto;
        font-size: 1.1rem;
        color: ${(props) => props.theme.calendarTodayClock};
    }

    @media only screen and (min-width: 450px) {
        .clear {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 3rem;
            margin: 0;
            font-size: 0.9rem;
            color: ${(props) => props.theme.accentBgLight};
        }
        .clear:hover {
            color: ${(props) => props.theme.calendarColorSecondary};
        }
    }
`;
