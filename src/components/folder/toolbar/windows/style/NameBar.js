import styled from 'styled-components';

export const NameBar = styled.div`
    display: flex;
    z-index: 10;
    width: 100%;
    height: 2.5rem;
    user-select: none;
    background: ${(props) => props.theme.folderNameBarBg};
    transition: background 0.2s ease-in-out;

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 100%;
    }

    && .menu:hover,
    && .menu:focus {
        background: ${(props) => props.theme.folderNameBarBtnHover};
    }
`;
