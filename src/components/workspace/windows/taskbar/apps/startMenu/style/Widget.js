import styled from 'styled-components';

export const Widget = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0.1rem 0;

    svg {
        width: 2rem;
        height: 2rem;
    }

    &&:hover {
        background-color: var(--backgroundHover);
    }
`;
