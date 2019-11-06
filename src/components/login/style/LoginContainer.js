import styled, { keyframes, css } from 'styled-components';

const show = keyframes`
0% {
    opacity: 0;
    transform: scale(.95);
}
100% {
    opacity: 1;
    transform: scale(1);
}
`;

const hide = keyframes`
0% {
    opacity: 1;
    transform: scale(1);
}
100% {
    opacity: 0;
    transform: scale(.95);
}
`;

export const LoginContainer = styled.div`
    ${props =>
        props.animateInOut &&
        css`
            animation: ${show} 0.5s ease-in 1 forwards;
        `}
    ${props =>
        !props.animateInOut &&
        css`
            animation: ${hide} 0.5s ease-in 1 forwards;
        `}
`;
