import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease-in-out;
    font-size: 1.5rem;
    color: var(--primary);
    background: ${({ open }) => open && 'var(--backgroundHover)'};
    outline: none;
`;
