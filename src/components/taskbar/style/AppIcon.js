import styled, { css } from 'styled-components';

export const AppIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 3.5rem;
    line-height: 3.5rem;
    transition: all 0.2s;

    &&::after {
        content: '';
        background: ${(props) => props.theme.accentBg};
        position: absolute;
        bottom: 0;
        left: 15%;
        height: 3px;
        width: 70%;
        transition: all 0.2s;
        border-radius: 1rem;
    }

    ${(props) =>
        props.appIndex === 104 &&
        props.minimize !== true &&
        css`
            background: ${(props) => props.theme.iconBg};
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
        background: ${(props) => props.theme.iconBgHover};
        transition: all 0.2s;
    }
`;
