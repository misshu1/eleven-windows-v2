import styled from 'styled-components';

export const NotificationContainer = styled.div`
    width: 33.33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.accentBg};
    font-size: 1.5rem;
    margin: 0 1px;
    outline: none;

    .counter-style {
        position: absolute;
        bottom: -4px;
        right: -4px;
        color: #fff;
        background: ${props => props.theme.accentBgLight};
        box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
    }

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

        .counter-style {
            background: ${props => props.theme.accentBg};
        }

        &&:hover,
        :focus {
            background: ${props => props.theme.clockHover};
            outline: none;
        }
    }
`;
