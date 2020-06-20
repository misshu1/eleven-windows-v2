import styled, { css } from 'styled-components';

export const Icon = styled.div`
    display: flex;
    font-size: 1.3rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    background: ${(props) => props.isActive && props.theme.accentBg};
    color: ${(props) => props.isActive && '#fff'};

    ${(props) =>
        props.close &&
        css`
            font-size: 1rem;
            border-radius: 0;
            border-top-right-radius: inherit;
            &&:hover {
                background: ${props.theme.accentBg};
                color: #fff;
            }
        `}
`;
