import styled from 'styled-components';

export const Card = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;
    width: 7rem;
    font-size: 2rem;
    background: var(--backgroundCard);
    background: ${({ open }) => (open ? 'var(--primary)' : '')};
    background: ${({ match }) => (match ? 'var(--colorSuccess)' : '')};
    color: #fff;
    border-radius: 0.5rem;
    padding: 0;
    list-style: none;
    box-shadow: 0px 0px 10px -7px var(--boxShadow);

    /* Open card styles */
    transform: ${({ open }) => (open ? 'rotateY(180deg)' : 'rotateY(0)')};
    transform-style: preserve-3d;
    transition: all 0.3s;

    @media (max-width: 660px) {
        max-height: 16vw;
        max-width: 16vw;
    }
`;
