import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    background: ${(props) => props.open && props.theme.clockHover};
`;
