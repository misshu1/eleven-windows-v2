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
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);

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
