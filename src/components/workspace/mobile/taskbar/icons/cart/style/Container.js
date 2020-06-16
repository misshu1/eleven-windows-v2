import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    font-size: 1.5rem;
    outline: none;
    background: ${(props) => props.open && props.theme.clockHover};

    svg {
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 0.2rem;
    }
`;
