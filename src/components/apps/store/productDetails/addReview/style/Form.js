import styled, { css } from 'styled-components';

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    h3 {
        margin: 0 0 1rem 0;
        text-align: center;
    }

    .review-label,
    .name-label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .error {
        display: block;
        text-align: center;
        font-weight: 900;
        color: red;
        margin: 0.5rem 0 0 0;
        min-height: 1.5rem;
    }

    .review-title,
    .rating-title,
    .name-title {
        align-self: flex-start;
        margin-bottom: 1rem;
    }

    input {
        display: block;
        height: 3rem;
        width: 100%;
        outline: none;
        background-color: var(--background);
        color: var(--colorDefault);
        border: 1px solid var(--border);
        border-radius: 0.3em;
        padding: 0.5rem;
        margin-bottom: 0.2rem;
    }

    input:hover {
        box-shadow: 0 0 0 1px var(--border);
        border: 1px solid var(--border);
    }

    input:focus {
        box-shadow: 0 0 0 1px var(--primaryLight);
        border: 1px solid var(--primaryLight);
        input:hover {
            border: 1px solid var(--primaryLight);
        }
    }

    textarea {
        display: block;
        resize: vertical;
        min-height: 3rem;
        max-height: 8rem;
        width: 100%;
        outline: none;
        background-color: var(--background);
        color: var(--colorDefault);
        border: 1px solid var(--border);
        border-radius: 0.3em;
        padding: 0.5rem;
        margin-bottom: 0.2rem;
    }

    textarea:hover {
        box-shadow: 0 0 0 1px var(--border);
        border: 1px solid var(--border);
    }

    textarea:focus {
        box-shadow: 0 0 0 1px var(--primaryLight);
        border: 1px solid var(--primaryLight);
        textarea:hover {
            border: 1px solid var(--primaryLight);
        }
    }

    .rating-label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: fit-content;
    }

    #name {
        ${({ errors }) =>
            errors.name &&
            css`
                box-shadow: 0 0 0 1px red;
                border: 1px solid red;
            `}
    }

    #review {
        ${({ errors }) =>
            errors.review &&
            css`
                box-shadow: 0 0 0 1px red;
                border: 1px solid red;
            `}
    }
`;
