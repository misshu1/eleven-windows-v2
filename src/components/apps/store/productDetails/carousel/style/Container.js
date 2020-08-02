import styled from 'styled-components';

export const Container = styled.div`
    max-width: 50rem;
    margin: 0 auto;

    .carousel__master-spinner-container {
        background: inherit;
    }

    .slide-image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
    }

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
        grid-template-rows: 3rem;
        grid-template-columns: 3rem;
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
        background: ${(props) => props.theme.accentBg};
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
    }

    .thumbnail-img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
    }

    @media only screen and (min-width: 450px) {
        padding: 0.5rem;
    }
`;
