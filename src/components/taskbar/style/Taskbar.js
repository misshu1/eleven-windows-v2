import styled from 'styled-components';

export const Taskbar = styled.div`
    display: flex;
    color: ${props => props.theme.textColor};
    z-index: 200;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    background: ${props => props.theme.background};
    box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
        0px -4px 5px 0px rgba(0, 0, 0, 0.14),
        0px -1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
`;
