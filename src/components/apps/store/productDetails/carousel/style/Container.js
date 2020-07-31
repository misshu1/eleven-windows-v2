import styled from 'styled-components';

export const Container = styled.div`
    max-width: 50rem;
    margin: 0 auto;

    .dots-container {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }

    .custom-dot {
        cursor: default;
        display: inline-block;
        margin: 0 0.2rem;
        width: 0.5rem;
        height: 0.5rem;
        padding: 0.5rem;
        background: ${(props) => props.theme.accentBg};
        border: none;
        outline: none;
        border-radius: 100%;
        user-select: none;
    }

    .custom-dot-selected {
        background: ${(props) => props.theme.accentBgLight};
    }

    .thumbnail-container {
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        align-items: center;
        grid-auto-rows: 6remrem;
        grid-gap: 1rem;
        width: 100%;
        padding: 1rem;
    }

    .thumbnail-selected {
        box-shadow: 0px 0px 4px 2px ${(props) => props.theme.accentBg};
    }

    .thumbnail {
        cursor: default;
        display: grid;
        grid-template-columns: 3rem;
        grid-template-rows: 3rem;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        background: transparent;
    }
`;
