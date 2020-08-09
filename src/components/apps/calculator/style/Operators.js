import styled from 'styled-components';

export const Operators = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);

    && button {
        margin: 1px;
        padding: 0;
        border: none;
        outline: none;
        font-size: 1.8rem;
        background-color: var(--backgroundLight);
        color: var(--colorDefault);
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    }
    && button:hover,
    button:focus {
        border: 1px solid var(--border);
        background-color: var(--backgroundHover);
        color: var(--colorDefault);
    }
    && button:nth-child(5) {
        background-color: var(--primary);
        color: #fff;
    }
`;
