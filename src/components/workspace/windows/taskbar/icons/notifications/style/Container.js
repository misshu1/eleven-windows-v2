import styled from 'styled-components';

export const Container = styled.li`
    width: 3.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease-in-out;
    font-size: 1.5rem;
    margin: 0 1px;
    outline: none;
    background-color: ${({ open }) => open && 'var(--backgroundHover)'};
    color: var(--colorDefault);

    &&:hover,
    &&:focus {
        background-color: var(--backgroundHover);
    }
`;
