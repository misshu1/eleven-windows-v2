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
    background: ${props => props.theme.modalBg};
    color: ${props => props.theme.modalColor};
    margin: 0.5rem;
    display: flex;

    ${props =>
        props.type === 'success' &&
        css`
            background: #43a047;
        `}
    ${props =>
        props.type === 'warn' &&
        css`
            background: #ffa000;
        `}
    ${props =>
        props.type === 'error' &&
        css`
            background: #d32f2f;
        `}

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
            margin-right: .5rem;
        }
    }

    .content {
        flex: 1;
        padding: .4rem 0;
    }

    h3 {
        margin: 0;
        flex: 1;
    }
    p {
        margin: 0.5rem 0;
        padding-right: 0.5rem;
    }

    @media (min-width: 28rem) {
        width: 21.87rem;
        border-radius: .5rem 0 0 .5rem;
        margin: 0.5rem 0;
        box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
    }
`;
