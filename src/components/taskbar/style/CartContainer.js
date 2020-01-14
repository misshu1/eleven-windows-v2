import styled from 'styled-components';

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    width: 33.33%;
    height: 100%;
    font-size: 1.5rem;
    outline: none;

    svg {
        position: relative;
        width: 2rem;
        height: 2rem;
        border-radius: 0.2rem;
    }

    .fa-layers {
        width: fit-content;
        height: fit-content;
    }

    .counter-style {
        position: absolute;
        bottom: 3px;
        right: -4px;
        color: #fff;
        background: ${props => props.theme.accentBgLight};
        box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
    }

    @media (max-width: 28rem) {
        order: 3;
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

        svg .fill-color {
            fill: ${props => props.theme.textColor};
        }

        svg .stroke-color {
            stroke: ${props => props.theme.textColor};
        }

        &&:hover,
        :focus {
            background: ${props => props.theme.clockHover};
            outline: none;
        }
    }
`;
