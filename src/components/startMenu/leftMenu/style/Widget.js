import styled from 'styled-components';

export const Widget = styled.div`
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0.1rem 0;
    &&:hover {
        background: ${props => props.theme.startLeftMenuHover};
    }
`;
