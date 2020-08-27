import styled from 'styled-components';

export const Container = styled.div`
    max-width: 50rem;
    width: 100%;
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
        user-select: none;
        display: inline-block;
        margin: 0 0.2rem;
        width: 1.3rem;
        height: 0.8rem;
        border: none;
        border-radius: 0.2rem;
        outline: none;
        background-color: var(--primaryLight);
    }

    .custom-dot-selected {
        background-color: var(--primary);
    }

    @media only screen and (min-width: 450px) {
        padding: 0.5rem;
    }
`;
