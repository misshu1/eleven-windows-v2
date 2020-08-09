import styled, { css } from 'styled-components';

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    min-height: 100%;
    width: 100%;
    padding: 2rem 0.5rem;

    label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .error {
            display: block;
            text-align: center;
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

        #name {
            ${(props) =>
                (props.errors.name || props.errors.firebase) &&
                css`
                    box-shadow: 0 0 0 1px var(--colorError);
                    border: 1px solid var(--colorError);
                `}
        }

        #email {
            ${(props) =>
                (props.errors.email || props.errors.firebase) &&
                css`
                    box-shadow: 0 0 0 1px var(--colorError);
                    border: 1px solid var(--colorError);
                `}
        }

        #password {
            ${(props) =>
                (props.errors.password || props.errors.firebase) &&
                css`
                    box-shadow: 0 0 0 1px var(--colorError);
                    border: 1px solid var(--colorError);
                `}
        }
    }
`;
