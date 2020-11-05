import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    font-size: 1.5rem;
    outline: none;
    height: 100%;
    width: 3.5rem;
    color: var(--colorDefault);
    background-color: ${({ open }) => open && 'var(--backgroundHover)'};

    &&:hover,
    &&:focus {
        background-color: var(--backgroundHover);
    }
`;
