import styled from 'styled-components';

export const Name = styled.div`
    cursor: default;
    display: flex;
    flex: 1;
    align-items: center;
    height: 100%;
    padding-left: 1.5rem;
    color: ${props => props.theme.textColor};
    transition: color 0.2s ease-in-out;
`;
