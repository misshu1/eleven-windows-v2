import styled from 'styled-components';

export const Deck = styled.ul`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 3vw;
    margin: 0 auto;
    width: fit-content;
    height: fit-content;
    padding: 0;
    border-radius: 1.25rem;

    @media (min-width: 28em) {
        gap: 1rem;
        padding: 1rem;
    }
`;
