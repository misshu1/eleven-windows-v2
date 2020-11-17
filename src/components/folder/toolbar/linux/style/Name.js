import styled from 'styled-components';

export const Name = styled.div`
    cursor: default;
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: ${({ toolbarMenu, enablePagination }) =>
        toolbarMenu || enablePagination ? '0.5rem' : '1.5rem'};
    color: var(--colorDefault);
    transition: color 0.2s ease-in-out;
`;
