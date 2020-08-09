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
        background-color: var(--primary);
        border: none;
        outline: none;
        border-radius: 100%;
        user-select: none;
    }

    .custom-dot-selected {
        background-color: var(--primaryLight);
    }

    @media only screen and (min-width: 450px) {
        padding: 0.5rem;
    }
`;
