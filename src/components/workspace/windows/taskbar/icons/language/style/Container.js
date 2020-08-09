import styled from 'styled-components';

export const Container = styled.li`
    display: none;
    @media only screen and (min-width: 450px) {
        cursor: default;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 3.5rem;
        margin: 0 1px;
        transition: color 0.2s ease-in-out;
        outline: none;
        background-color: ${(props) => props.open && 'var(--backgroundHover)'};

        &&:hover,
        &&:focus {
            background-color: var(--backgroundHover);
        }
    }
`;
