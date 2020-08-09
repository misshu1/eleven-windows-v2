import styled from 'styled-components';

export const Container = styled.li`
    font-family: 'Roboto', sans-serif;
    cursor: default;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    width: 7rem;
    color: var(--colorDefault);
    background: ${(props) => props.open && 'var(--backgroundHover)'};
    transition: color 0.2s ease-in-out;
    outline: none;

    &&:hover,
    &&:focus {
        background-color: var(--backgroundHover);
    }
`;
