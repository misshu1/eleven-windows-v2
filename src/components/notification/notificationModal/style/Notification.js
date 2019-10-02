import styled, { keyframes, css } from 'styled-components';

const slideUp = keyframes`
0% {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
}
100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
`;

const fadeout = keyframes`
0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
100% {
    opacity: 0;
    transform: translate3d(50%, 0, 0);
}
`;

export const Notification = styled.div`
    border-top: 1px solid ${props => props.theme.modalBorder};
    border-left: 1px solid ${props => props.theme.modalBorder};
    border-bottom: 1px solid ${props => props.theme.modalBorder};
    background: ${props => props.theme.modalBg};
    color: ${props => props.theme.modalColor};
    width: 21.87rem;
    margin: 0.5rem 0;
    display: flex;
    ${props =>
        props.visible &&
        css`
            animation: ${slideUp} 0.3s ease-out 1 forwards;
        `}
    ${props =>
        props.close &&
        css`
            animation: ${fadeout} 0.1s ease-in 1 forwards;
        `}


    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
    }

    .title {
        display: flex;

        button {
            border: none;
            outline: none;
            background: transparent;
            color: ${props => props.theme.modalColor};
            font-weight: 600;
            font-size: 1.2rem;
        }
    }

    .content {
        flex: 1;
    }

    h2 {
        color: ${props => props.theme.modalTitle};
        margin: 0;
        flex: 1;
    }
    p {
        margin: 0.5rem 0;
        padding-right: 0.5rem;
    }
`;
