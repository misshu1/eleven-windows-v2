import styled from 'styled-components';

export const NotificationContainer = styled.div`
    width: 33.33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.accentBg};
    transition: color 0.2s ease-in-out;
    font-size: 1.5rem;
    margin: 0 1px;
    outline: none;

    @media (max-width: 28rem) {
        order: 1;
        &&:active {
            background: ${props => props.theme.clockHover};
            outline: none;
        }
    }

    @media (min-width: 28rem) {
        height: 100%;
        width: 3.5rem;
        color: ${props => props.theme.textColor};

        &&:hover,
        :focus {
            background: ${props => props.theme.clockHover};
            outline: none;
        }
    }
`;
