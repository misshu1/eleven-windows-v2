import styled from 'styled-components';

export const AppIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0.5rem;
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
        text-align: center;
        overflow: hidden;

        @supports (display: -webkit-box) {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        @supports not (display: -webkit-box) {
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }

    && svg {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.2rem;
    }

    &&:hover {
        background-color: var(--backgroundHover);
        transition: all 0.2s;
    }
`;
