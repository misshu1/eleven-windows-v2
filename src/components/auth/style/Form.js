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
            box-shadow: 0 0 0 1px ${(props) => props.theme.startMenuBorder};
            border: 1px solid ${(props) => props.theme.startMenuBorder};
        }

        input:focus {
            box-shadow: 0 0 0 1px ${(props) => props.theme.accentBgLight};
            border: 1px solid ${(props) => props.theme.accentBgLight};
            input:hover {
                border: 1px solid ${(props) => props.theme.accentBgLight};
            }
        }

        #name {
            ${(props) =>
                (props.errors.name || props.errors.firebase) &&
                css`
                    box-shadow: 0 0 0 1px red;
                    border: 1px solid red;
                `}
        }

        #email {
            ${(props) =>
                (props.errors.email || props.errors.firebase) &&
                css`
                    box-shadow: 0 0 0 1px red;
                    border: 1px solid red;
                `}
        }

        #password {
            ${(props) =>
                (props.errors.password || props.errors.firebase) &&
                css`
                    box-shadow: 0 0 0 1px red;
                    border: 1px solid red;
                `}
        }
    }
`;
