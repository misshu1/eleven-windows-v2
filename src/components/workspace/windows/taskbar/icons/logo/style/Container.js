import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 100%;
    outline: none;
    background-color: ${(props) => props.open && 'var(--backgroundHover)'};

    &&:hover,
    &&:focus {
        background-color: var(--backgroundHover);
    }
`;
