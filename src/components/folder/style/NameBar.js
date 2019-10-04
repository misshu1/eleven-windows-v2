import styled from 'styled-components';

export const NameBar = styled.div`
    display: flex;
    align-items: center;
    z-index: 10;
    position: sticky;
    top: 0;
    width: 100%;
    height: 2.5rem;
    user-select: none;
    background: ${props => props.theme.folderNameBarBg};
    transition: background 0.2s ease-in-out;
`;
