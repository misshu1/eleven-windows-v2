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
    background: ${props => props.theme.folderHoverBg};
    outline: 1px solid ${props => props.theme.folderHoverOutline};

    && a {
        display: flex;
        align-items: center;
        width: 100%;
        color: ${props => props.theme.startMenuColor};
        text-decoration: none;
    }

    && img {
        height: 2rem;
        width: 2rem;
        margin: 0 1rem 0 0;
    }

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (min-width: 28rem) {
        background: transparent;
        outline: none;
        animation: ${slideUp} ${props => props.animationDuration + 0.3 + 's'}
            ease-out 1 forwards;

        &&:hover {
            background: ${props => props.theme.folderHoverBg};
            outline: 1px solid ${props => props.theme.folderHoverOutline};
            transition: background 0.05s ease-in-out;
        }
    }
`;
