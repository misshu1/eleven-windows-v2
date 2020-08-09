import styled from 'styled-components';

export const Buttons = styled.div`
    display: flex;
    height: 100%;
    width: fit-content;
    color: var(--colorDefault);
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
        background-color: var(--backgroundHover);
    }

    && .closeBtn:hover,
    && .closeBtn:focus {
        background-color: var(--primary);
        color: #fff;
        outline: none;
    }
`;
