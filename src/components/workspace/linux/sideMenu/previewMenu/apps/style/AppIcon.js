import styled from 'styled-components';

export const AppIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 1.5em;
    transition: all 0.2s;
    color: var(--colorDefault);

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        border-radius: 1.5em;
        transition: all 0.2s;
        text-decoration: none;
        color: var(--colorDefault);
    }
    .name {
        margin-top: 0.5rem;
        cursor: default;
    }
    && svg {
        width: 2rem;
        height: 2rem;
        border-radius: 0.2rem;
    }

    &&:hover {
        background-color: var(--backgroundHover);
        transition: all 0.2s;
    }
`;
