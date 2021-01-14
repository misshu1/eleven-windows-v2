import styled, { css } from 'styled-components';

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0.5rem;
    position: absolute;
    min-height: 100%;
    width: 100%;

    .contact-text {
        display: flex;
        align-items: center;
        flex: 1;
        min-height: 5rem;
        max-height: 8rem;
    }

    label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .error {
            display: block;
            text-align: center;
            font-weight: 900;
            color: var(--colorError);
            margin: 0;
            min-height: 1.5rem;
        }

        span {
            margin-bottom: 1rem;
        }

        input {
            display: block;
            height: 3rem;
            width: 100%;
            outline: none;
            background: transparent;
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
            box-shadow: 0 0 0 1px var(--primaryText);
            border: 1px solid var(--primaryText);
            input:hover {
                border: 1px solid var(--primaryText);
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

        #name {
            ${({ errors, touched }) =>
                touched.name &&
                errors.name &&
                css`
                    box-shadow: 0 0 0 1px var(--colorError);
                    border: 1px solid var(--colorError);
                `}
        }

        #email {
            ${({ errors, touched }) =>
                touched.email &&
                errors.email &&
                css`
                    box-shadow: 0 0 0 1px var(--colorError);
                    border: 1px solid var(--colorError);
                `}
        }

        #message {
            ${({ errors, touched }) =>
                touched.message &&
                errors.message &&
                css`
                    box-shadow: 0 0 0 1px var(--colorError);
                    border: 1px solid var(--colorError);
                `}
        }
    }
`;
