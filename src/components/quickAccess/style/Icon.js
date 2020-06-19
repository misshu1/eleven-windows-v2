import styled from 'styled-components';

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 100%;
    color: ${(props) => props.theme.textColor};
    transition: color 0.2s ease-in-out;
    border-radius: 100%;

    &&:hover,
    &&:focus {
        background: ${(props) => props.theme.clockHover};
    }

    svg {
        width: 1.8rem;
        height: 1.8rem;
    }
`;
