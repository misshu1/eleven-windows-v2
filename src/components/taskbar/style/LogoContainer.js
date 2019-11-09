import styled from 'styled-components';

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
    outline: none;

    @media (max-width: 28rem) {
        order: 2;
        &&:active {
            background: ${props => props.theme.clockHover};
            outline: none;
        }
    }

    @media (min-width: 28rem) {
        width: 4rem;
        &&:hover,
        :focus {
            background: ${props => props.theme.logoHover};
            outline: none;
        }
    }
`;
