import styled from 'styled-components';

export const Taskbar = styled.div`
    display: flex;
    color: ${props => props.theme.textColor};
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    background: ${props => props.theme.background};
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
`;
