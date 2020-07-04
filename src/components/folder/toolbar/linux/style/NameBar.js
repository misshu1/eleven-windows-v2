import styled from 'styled-components';

export const NameBar = styled.div`
    display: flex;
    z-index: 10;
    width: 100%;
    height: 2.5rem;
    user-select: none;
    background: ${(props) => props.theme.folderNameBarBg};
    background-image: ${(props) =>
        `linear-gradient(${props.theme.folderNameBarBg}, ${props.theme.background})`};
    transition: background 0.2s ease-in-out;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        width: 1.3rem;
        height: 1.3rem;
        font-size: 0.8rem;
        background: ${(props) => props.theme.folderLinuxButtonsBg};
    }

    .menuBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 100%;
    }

    && .menuBtn:hover,
    && .menuBtn:focus {
        .menu {
            background: ${(props) => props.theme.accentBg};
            color: #fff;
        }
    }

    .back-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: inherit;
    }

    .back-button:disabled {
        color: ${(props) => props.theme.accentBg};
        filter: grayscale(1);
    }

    .back-button:not(:disabled):hover {
        .back-icon {
            background: ${(props) => props.theme.accentBg};
            color: #fff;
        }
    }
`;
