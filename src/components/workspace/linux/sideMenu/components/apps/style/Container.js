import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 7rem;
    grid-gap: 0.2rem;
    width: 100%;
    height: 100%;
    padding: 0.5rem;

    .title {
        grid-column: 1 / 4;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;
    }
`;
