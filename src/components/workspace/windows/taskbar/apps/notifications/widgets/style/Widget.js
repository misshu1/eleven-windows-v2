import styled from 'styled-components';

export const Widget = styled.div`
    display: flex;
    flex-direction: column;
    width: 6rem;
    height: 4rem;
    margin: 0.5rem;
    background-color: var(--backgroundActive);
    border: 1px solid var(--border);
    padding: 0.2rem;
    transition: background 0.2s ease-in-out;

    svg {
        width: 1.8rem;
        height: 1.8rem;
        margin: 0 auto auto;
    }

    &&:hover {
        background-color: var(--backgroundHover);
    }

    .icon {
        margin: 0.3rem;
    }

    h5 {
        margin: 0;
        text-align: center;
    }
`;
