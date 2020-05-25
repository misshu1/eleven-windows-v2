import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    width: 33.33%;
    height: 100%;
    font-size: 1.5rem;
    outline: none;
    background: ${(props) => props.open && props.theme.clockHover};

    svg {
        width: 2rem;
        height: 2rem;
        border-radius: 0.2rem;
    }

    @media only screen and (max-width: 450px) {
        order: 3;
    }

    @media only screen and (min-width: 451px) {
        height: 100%;
        width: 3.5rem;
        color: ${(props) => props.theme.textColor};

        svg .fill-color {
            fill: ${(props) => props.theme.textColor};
        }

        svg .stroke-color {
            stroke: ${(props) => props.theme.textColor};
        }

        &&:hover,
        &&:focus {
            background: ${(props) => props.theme.clockHover};
        }
    }
`;
