import styled from 'styled-components';

export const NumberPad = styled.div`
    display: grid;
    grid-template-rows: repeat(4, minmax(3rem, 1fr));
    grid-template-columns: repeat(3, 1fr);

    && button {
        background: ${(props) => props.theme.calcNumButtonBg};
        color: ${(props) => props.theme.textColor};
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
        font-size: 1.8rem;
        margin: 1px;
        padding: 0;
        border: none;
        outline: none;
    }

    && button:hover,
    button:focus {
        border: 1px solid ${(props) => props.theme.folderBorder};
        background: ${(props) => props.theme.calcNumButtonHover};
        color: ${(props) => props.theme.textColor};
    }
`;
