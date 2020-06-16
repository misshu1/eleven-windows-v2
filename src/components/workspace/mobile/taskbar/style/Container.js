import styled from 'styled-components';

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
`;
