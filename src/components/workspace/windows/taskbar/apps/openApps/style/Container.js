import styled from 'styled-components';

export const Container = styled.li`
    display: none;
    @media only screen and (min-width: 450px) {
        display: flex;
        flex: 1;
        align-items: center;
        height: 100%;
    }
`;
