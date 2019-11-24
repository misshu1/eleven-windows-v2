import styled from 'styled-components';

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 3rem;
    color: ${props => props.theme.textColor};
    transition: color 0.2s ease-in-out;

    && div,
    .closeBtnDesktop {
        display: none;
    }

    && a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: ${props => props.theme.folderCloseBtn};
        width: 100%;
        height: 100%;
        text-decoration: none;
        cursor: default;
        color: #fff;
    }

    && div:hover,
    && div:focus {
        background: ${props => props.theme.folderNameBarBtnHover};
    }

    @media (min-width: 28rem) {
        width: 6rem;

        && div {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 50%;
            height: 100%;
        }

        && .closeBtnDesktop:hover,
        && .closeBtnDesktop:focus {
            background: ${props => props.theme.folderCloseBtn};
            color: #fff;
            outline: none;
        }

        && .closeBtnMobile {
            display: none;
        }
    }
`;
