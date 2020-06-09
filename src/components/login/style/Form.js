import styled, { css } from 'styled-components';

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    margin: 2rem auto;

    label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;

        .error {
            display: block;
            text-align: center;
            color: red;
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
            color: ${(props) => props.theme.textColor};
            border: 1px solid ${(props) => props.theme.startMenuBorder};
            border-radius: 0.3em;
            padding: 0.5rem;
            margin-bottom: 0.2rem;
        }

        input:hover {
            box-shadow: 0 0 0 2px ${(props) => props.theme.startMenuBorder};
            border: 1px solid transparent;
        }

        input:focus {
            box-shadow: 0 0 0 2px ${(props) => props.theme.accentBgLight};
            border: 1px solid transparent;
            input:hover {
                border: 1px solid transparent;
            }
        }

        #email {
            ${(props) =>
                (props.errors.email || props.errors.firebase) &&
                css`
                    box-shadow: 0 0 0 2px red;
                    border: 1px solid transparent;
                `}
        }

        #password {
            ${(props) =>
                (props.errors.password || props.errors.firebase) &&
                css`
                    box-shadow: 0 0 0 2px red;
                    border: 1px solid transparent;
                `}
        }
    }
`;
