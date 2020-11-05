import styled from 'styled-components';

export const Container = styled.li`
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 3.5rem;
    margin: 0 1px;
    transition: color 0.2s ease-in-out;
    outline: none;
    background-color: ${({ open }) => open && 'var(--backgroundHover)'};
    &&:hover,
    &&:focus {
        background-color: var(--backgroundHover);
    }
`;
