import styled from 'styled-components';

export const ClockContainer = styled.div`
    padding: 1.5rem;
    cursor: default;

    && span:nth-child(1) {
        font-size: 3rem;
        font-weight: 100;
        color: ${(props) => props.theme.calendarColorPrimary};
        transition: color 0.2s ease-in-out;
    }
    && span:nth-child(2) {
        color: ${(props) => props.theme.calendarColorSecondary};
        text-transform: uppercase;
        font-size: 1.2rem;
        transition: color 0.2s ease-in-out;
    }
    && span:nth-child(3) {
        width: max-content;
        font-size: 0.9rem;
        display: block;
        color: ${(props) => props.theme.calendarTodayClock};
        transition: color 0.2s ease-in-out;
    }
    && span:nth-child(3):hover {
        color: ${(props) => props.theme.calendarColorSecondary};
        transition: color 0.2s ease-in-out;
    }
`;
