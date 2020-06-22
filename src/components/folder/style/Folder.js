import styled, { css } from 'styled-components';

export const Folder = styled.section`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor};
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    @media only screen and (min-width: 450px) {
        height: ${(props) => (props.height ? props.height : '44rem')};
        width: ${(props) => (props.width ? props.width : '44rem')};

        ${(props) =>
            props.isLinuxSelected === true &&
            css`
                border-top-left-radius: 1em;
                border-top-right-radius: 1em;
            `}
    }

    @media only screen and (max-height: 700px) {
        height: 100%;
    }
`;
