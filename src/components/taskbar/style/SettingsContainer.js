import styled from 'styled-components';

export const SettingsContainer = styled.div`
    width: 33.33%;
    height: 100%;
    position: relative;

    && a {
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: ${props => props.theme.startSmallWidgetColor};
        width: 100%;
        height: 100%;
        cursor: default;
        transition: color 0.2s ease-in-out;

        && a:visited,
        && a:active {
            color: ${props => props.theme.startSmallWidgetColor};
        }

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 2rem;
            height: 2rem;
            border-radius: 0.2rem;
        }
    }

    @media (max-width: 28rem) {
        order: 3;
        &&:active {
            background: ${props => props.theme.clockHover};
            outline: none;
        }
    }

    @media (min-width: 28rem) {
        display: none;
    }
`;
