import styled from 'styled-components';

export const NameBar = styled.div`
    display: flex;
    z-index: 10;
    width: 100%;
    height: 2.5rem;
    user-select: none;
    background-color: var(--backgroundLight);
    transition: background 0.2s ease-in-out;

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 100%;
    }

    && .menu:hover,
    && .menu:focus {
        background-color: var(--backgroundHover);
    }

    .back-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: inherit;
    }

    .back-button:disabled {
        color: var(--primary);
        filter: grayscale(1);
    }

    .back-button:not(:disabled):hover {
        background-color: var(--backgroundHover);
    }
`;
