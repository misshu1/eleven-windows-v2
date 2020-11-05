import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    max-height: 3.5rem;
    border-bottom: 1px solid var(--border);

    ${({ isLoginButtonVisible }) =>
        isLoginButtonVisible &&
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
    }

    .power-off:hover {
        background-color: var(--backgroundHover);
    }
`;
