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
        width: 2rem;
        height: 100%;

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
    }

    && .closeBtn:hover,
    && .closeBtn:focus {
        .close {
            background: var(--linuxCloseBtn);
            color: #fff;
            outline: none;
        }
    }

    && .minimizeBtn:hover,
    && .minimizeBtn:focus {
        .minimize {
            background: var(--linuxMinimizeBtn);
            color: #fff;
            outline: none;
        }
    }

    && .maximizeBtn:hover,
    && .maximizeBtn:focus {
        .maximize {
            background: var(--linuxMaximizeBtn);
            color: #fff;
            outline: none;
        }
    }
`;
