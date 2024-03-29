import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 1rem;
    max-width: 80rem;
    margin: 0 auto;

    h2 {
        display: flex;
        align-items: flex-end;
        height: 4rem;
    }

    p {
        margin: 2rem 0;
        line-height: 1.7;
    }

    .text-highlight {
        font-weight: 900;
        color: var(--primaryText);
        border-bottom: 1px solid var(--primaryText);
    }

    .required {
        color: var(--primaryText);
        font-weight: 900;
        font-size: 0.8rem;
    }
    .notification-btn-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .notification-btn-container button {
        margin: 0.5rem;
    }
`;
