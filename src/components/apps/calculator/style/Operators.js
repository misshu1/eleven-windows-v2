import styled from 'styled-components';

export const Operators = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);

    && button {
        margin: 1px;
        padding: 0;
        border: none;
        outline: none;
        font-size: 1.8rem;
        background: ${props => props.theme.calcOperatorButtonBg};
        color: ${props => props.theme.textColor};
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    }
    && button:hover,
    button:focus {
        border: 1px solid ${props => props.theme.folderBorder};
        background: ${props => props.theme.calcOperatorButtonHover};
        color: ${props => props.theme.textColor};
    }
    && button:nth-child(5) {
        background: ${props => props.theme.accentBg};
        color: #fff;
    }
`;
