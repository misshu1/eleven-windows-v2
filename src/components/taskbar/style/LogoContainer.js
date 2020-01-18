import styled from 'styled-components';

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
    outline: none;
    background: ${props => props.open && props.theme.clockHover};

    &&:hover {
        background: ${props => props.theme.clockHover};
    }

    @media (max-width: 28rem) {
        order: 2;
    }

    @media (min-width: 28rem) {
        width: 4rem;
    }
`;
