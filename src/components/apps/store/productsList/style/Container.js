import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 12.5rem);
    place-content: start center;
    grid-gap: 1rem;
    padding: 0.5rem;
    max-width: 80rem;
    margin: 0 auto;
`;
