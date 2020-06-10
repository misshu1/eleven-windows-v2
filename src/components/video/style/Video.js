import styled from 'styled-components';

export const Video = styled.video`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -100;

    @media only screen and (min-aspect-ratio: 16/9) {
        width: 100%;
        height: auto;
    }

    @media only screen and (max-aspect-ratio: 16/9) {
        width: auto;
        height: 100%;
    }
`;
