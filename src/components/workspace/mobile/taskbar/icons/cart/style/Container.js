import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    font-size: 1.5rem;
    outline: none;
    background-color: ${({ open }) => open && 'var(--backgroundHover)'};
`;
