import styled from 'styled-components';

export const Container = styled.nav`
    display: none;

    @media only screen and (min-width: 450px) {
        display: flex;
        flex: 1;
        height: 100%;
    }
`;
