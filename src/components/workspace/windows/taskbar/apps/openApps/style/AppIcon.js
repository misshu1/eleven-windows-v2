import styled, { css } from 'styled-components';

export const AppIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 3.5rem;
    transition: all 0.2s;

    &&::after {
        content: '';
        background-color: var(--primary);
        position: absolute;
        bottom: 0;
        left: 15%;
        height: 3px;
        width: 70%;
        transition: all 0.2s;
        border-radius: 1rem;
    }

    ${(props) =>
        props.isActive &&
        props.minimize !== true &&
        css`
            background-color: var(--backgroundActive);
            &&::after {
                left: 0;
                width: 100%;
            }
        `};

    && svg {
        width: 2rem;
        height: 2rem;
        border-radius: 0.2rem;
    }

    &&:hover::after {
        left: 0;
        width: 100%;
        transition: all 0.4s;
    }

    &&:hover {
        background-color: var(--backgroundHover);
        transition: all 0.2s;
    }
`;
