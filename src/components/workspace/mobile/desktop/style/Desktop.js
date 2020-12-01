import styled from 'styled-components';

export const Desktop = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, 5.5rem);
    grid-template-rows: repeat(auto-fill, 6rem);
    grid-auto-flow: column;
    grid-gap: 1rem;
    user-select: none;
    color: #d6d8de;
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding: 1rem;
    overflow: auto;
`;
