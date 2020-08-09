import styled from 'styled-components';

export const ClockContainer = styled.div`
    padding: 1.5rem;
    cursor: default;

    && span:nth-child(1) {
        font-size: 3rem;
        font-weight: 100;
        color: var(--colorDefault);
        transition: color 0.2s ease-in-out;
    }
    && span:nth-child(2) {
        color: var(--colorDefault);
        text-transform: uppercase;
        font-size: 1.2rem;
        transition: color 0.2s ease-in-out;
    }
    && span:nth-child(3) {
        width: max-content;
        font-size: 0.9rem;
        display: block;
        color: var(--primaryText);
        transition: color 0.2s ease-in-out;
    }
    && span:nth-child(3):hover {
        color: var(--colorDefault);
        transition: color 0.2s ease-in-out;
    }
`;
