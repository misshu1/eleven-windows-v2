import styled from 'styled-components';

export const Buttons = styled.div`
    display: flex;
    height: 100%;
    width: fit-content;
    color: ${(props) => props.theme.textColor};
    transition: color 0.2s ease-in-out;

    && div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 100%;
    }

    && div:hover,
    && div:focus {
        background: ${(props) => props.theme.folderNameBarBtnHover};
    }

    && .closeBtn:hover,
    && .closeBtn:focus {
        background: ${(props) => props.theme.folderCloseBtn};
        color: #fff;
        outline: none;
    }
`;
