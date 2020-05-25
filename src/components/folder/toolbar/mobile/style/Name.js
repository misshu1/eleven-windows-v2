import styled from 'styled-components';

export const Name = styled.h2`
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.textColor};
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0;
    padding-left: ${(props) => (props.toolbarMenu ? '0.5rem' : '1.5rem')};
    transition: color 0.2s ease-in-out;
    cursor: default;
`;
