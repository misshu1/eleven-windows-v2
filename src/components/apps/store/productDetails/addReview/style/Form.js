import styled, { css } from 'styled-components';

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    .review-label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .error {
        display: block;
        text-align: center;
        color: red;
        margin: 0.5rem 0 0 0;
        min-height: 1.5rem;
    }

    .review-title,
    .rating-title {
        align-self: flex-start;
        margin-bottom: 1rem;
    }

    textarea {
        display: block;
        resize: vertical;
        min-height: 3rem;
        max-height: 8rem;
        width: 100%;
        outline: none;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.textColor};
        border: 1px solid ${(props) => props.theme.startMenuBorder};
        border-radius: 0.3em;
        padding: 0.5rem;
        margin-bottom: 0.2rem;
    }

    textarea:hover {
        box-shadow: 0 0 0 2px ${(props) => props.theme.startMenuBorder};
        border: 1px solid ${(props) => props.theme.startMenuBorder};
    }

    textarea:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme.accentBgLight};
        border: 1px solid ${(props) => props.theme.accentBgLight};
        textarea:hover {
            border: 1px solid ${(props) => props.theme.accentBgLight};
        }
    }

    .rating-label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: fit-content;
    }

    #review {
        ${(props) =>
            props.errors.review &&
            css`
                box-shadow: 0 0 0 2px red;
                border: 1px solid red;
            `}
    }
`;
