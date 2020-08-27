import styled from 'styled-components';

export const TableHead = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-template-rows: minmax(2rem, 2.5rem);
    outline: none;
    user-select: none;
    font-weight: 600;
    border-left: 1px solid var(--backgroundHover);
    border-bottom: 1px solid var(--backgroundHover);

    .app-name {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 0.2rem;
        border-right: 1px solid var(--backgroundHover);
    }

    .category {
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid var(--backgroundHover);
    }
`;
