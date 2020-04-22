import styled from 'styled-components';

export const Container = styled.div`
    display: none;

    @media (min-width: 28rem) {
        font-family: 'Roboto', sans-serif;
        cursor: default;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        height: 100%;
        width: 7rem;
        color: ${(props) => props.theme.textColor};
        background: ${(props) => props.open && props.theme.clockHover};
        transition: color 0.2s ease-in-out;
        outline: none;

        &&:hover,
        &&:focus {
            background: ${(props) => props.theme.clockHover};
        }
    }
`;
