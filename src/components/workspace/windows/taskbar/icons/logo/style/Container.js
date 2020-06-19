import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
    outline: none;
    background: ${(props) => props.open && props.theme.clockHover};

    @media only screen and (max-width: 450px) {
        order: 2;
    }

    @media only screen and (min-width: 451px) {
        width: 4rem;

        &&:hover,
        &&:focus {
            background: ${(props) => props.theme.clockHover};
        }
    }
`;
