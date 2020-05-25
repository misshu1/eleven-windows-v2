import styled from 'styled-components';

export const NameBar = styled.div`
    display: flex;
    z-index: 10;
    position: sticky;
    top: 0;
    width: 100%;
    height: 3.5rem;
    user-select: none;
    transition: background 0.2s ease-in-out;

    && .backBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 100%;
        color: ${(props) => props.theme.accentBg};
        font-size: 1.4rem;
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 100%;
        font-size: 1.3rem;
    }

    && .menu:hover,
    && .menu:focus {
        background: ${(props) => props.theme.folderNameBarBtnHover};
    }
`;
