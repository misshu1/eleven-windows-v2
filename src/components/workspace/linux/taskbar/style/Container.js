import styled from 'styled-components';

export const Container = styled.ul`
    display: none;

    @media only screen and (min-width: 450px) {
        display: flex;
        flex: 1;
        height: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
`;
