import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    background-color: ${({ open }) => open && 'var(--backgroundHover)'};
`;
