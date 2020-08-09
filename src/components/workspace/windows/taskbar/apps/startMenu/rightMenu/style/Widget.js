import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
0% {
    transform: translate3d(0, 100%, 0);
}
100% {
    transform: translate3d(0, 0, 0);
}
`;

export const Widget = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.2rem;
    margin: 0.4rem 0;
    background-color: var(--backgroundCard);
    outline: 1px solid var(--borderCard);

    && a {
        display: flex;
        align-items: center;
        width: 100%;
        color: var(--colorDefault);
        text-decoration: none;
    }

    && svg {
        height: 2rem;
        width: 2rem;
        margin: 0 1rem 0 0;
    }

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media only screen and (min-width: 450px) {
        background: transparent;
        outline: none;
        animation: ${slideUp} ${(props) => props.animationDuration + 0.3 + 's'}
            ease-out 1 forwards;

        &&:hover {
            background-color: var(--backgroundCard);
            outline: 1px solid var(--border);
            transition: background 0.05s ease-in-out;
        }
    }
`;
