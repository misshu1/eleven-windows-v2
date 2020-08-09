import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    height: 3.5rem;
    width: 100%;
    border-bottom: 1px solid var(--border);

    && span {
        display: block;
        text-align: center;
        width: 3.5rem;
    }

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
        height: 3.5rem;
        margin: 0.1rem 0;

        svg {
            width: 2rem;
            height: 2rem;
        }
    }
    .power-off:hover {
        background-color: var(--backgroundHover);
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2.5rem;
        background-color: var(--secondary);
        transition: background 0.2s ease-in-out;
        border-top-right-radius: 0 0;
        border-bottom-right-radius: 37% 100%;
    }
`;
