import styled from 'styled-components';

export const TableHead = styled.div`
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr;
    grid-template-rows: minmax(2rem, 2.5rem);
    outline: none;
    user-select: none;
    color: ${props => props.theme.accentColor};
    font-weight: 600;
    border-left: 1px solid ${props => props.theme.folderHoverOutline};
    border-bottom: 1px solid ${props => props.theme.folderHoverOutline};

    .app-name {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 0.2rem;
        border-right: 1px solid ${props => props.theme.folderHoverOutline};
    }

    .category {
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid ${props => props.theme.folderHoverOutline};
    }
`;
