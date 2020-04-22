import styled, { css } from 'styled-components';

export const Container = styled.div`
    background: ${(props) => props.theme.nottificationMessageBg};
    color: ${(props) => props.theme.modalColor};
    width: 100%;
    margin: 0.7rem 0;
    display: flex;

    ${(props) =>
        props.type === 'success' &&
        css`
            background: #43a047;
        `}
    ${(props) =>
        props.type === 'warn' &&
        css`
            background: #ffa000;
        `}
    ${(props) =>
        props.type === 'error' &&
        css`
            background: #d32f2f;
        `}

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
    }

    .title {
        display: flex;

        button {
            display: inline-block;
            border: none;
            outline: none;
            background: transparent;
            color: ${(props) => props.theme.modalColor};
            font-weight: 600;
            font-size: 1.2rem;
            padding: .2rem 1rem;
            z-index: 1;
        }
    }

    .content {
        flex: 1;
        padding: .4rem 0;
    }

    h3 {
        margin: 0;
        flex: 1;
    }
    p {
        margin: 0.5rem 0;
        padding-right: 0.5rem;
    }
`;
