import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
    position: sticky;
    display: flex;
    align-items: center;
    top: 0;
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
        margin: 0 0 0 0.5rem;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
