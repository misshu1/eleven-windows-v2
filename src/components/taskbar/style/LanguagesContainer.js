import styled from 'styled-components';

export const LanguagesContainer = styled.div`
    display: none;
    @media (min-width: 28rem) {
        cursor: default;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 3.5rem;
        margin: 0 1px;
        transition: color 0.2s ease-in-out;
        outline: none;
        background: ${props => props.open && props.theme.clockHover};

        &&:hover {
            background: ${props => props.theme.clockHover};
        }
    }
`;
