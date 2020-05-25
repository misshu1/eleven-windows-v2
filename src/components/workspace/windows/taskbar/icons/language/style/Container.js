import styled from 'styled-components';

export const Container = styled.div`
    display: none;
    @media only screen and (min-width: 450px) {
        cursor: default;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 3.5rem;
        margin: 0 1px;
        transition: color 0.2s ease-in-out;
        outline: none;
        background: ${(props) => props.open && props.theme.clockHover};

        &&:hover,
        &&:focus {
            background: ${(props) => props.theme.clockHover};
        }
    }
`;
