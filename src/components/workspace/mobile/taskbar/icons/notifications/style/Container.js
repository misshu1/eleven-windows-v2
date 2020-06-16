import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease-in-out;
    font-size: 1.5rem;
    color: ${(props) => props.theme.accentBg};
    background: ${(props) => props.open && props.theme.clockHover};
    outline: none;
`;
