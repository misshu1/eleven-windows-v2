import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(5rem, 1fr));
    grid-auto-rows: 7rem;
    grid-gap: 0.2rem;
    width: 100%;
    min-height: 100%;
    padding: 0.5rem;
`;
