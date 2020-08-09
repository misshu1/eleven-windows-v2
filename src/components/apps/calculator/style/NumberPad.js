import styled from 'styled-components';

export const NumberPad = styled.div`
    display: grid;
    grid-template-rows: repeat(4, minmax(6rem, 1fr));
    grid-template-columns: repeat(3, 1fr);

    && button {
        background-color: var(--backgroundCard);
        color: var(--colorDefault);
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
        font-size: 1.8rem;
        margin: 1px;
        padding: 0;
        border: none;
        outline: none;
    }

    && button:hover,
    button:focus {
        border: 1px solid var(--border);
        background-color: var(--backgroundHover);
        color: var(--colorDefault);
    }
`;
