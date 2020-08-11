import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    height: 3.5rem;
    width: 100%;
    border-bottom: 1px solid var(--border);

    ${(props) =>
        props.isLoginButtonVisible &&
        css`
            padding: 0 0.5rem;
        `}

    && h4 {
        margin-right: 0.5rem;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .power-off {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.5rem;
        height: 100%;

        svg {
            width: 2rem;
            height: 2rem;
        }
    }
    .power-off:hover {
        background-color: var(--backgroundHover);
    }
`;
