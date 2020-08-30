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
        background-color: var(--backgroundActive);
        background-position: center center;
        background-size: cover;
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

    .no-images {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0;
        transform: translate(-50%, -50%);
    }

    @media only screen and (min-width: 450px) {
        padding: 0.5rem;
    }
`;
