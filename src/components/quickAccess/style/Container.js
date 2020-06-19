import { motion } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';

const ripple = (props) => keyframes`
0% {
    box-shadow: 0px 0px 15px 0px ${props.theme.accentBg},
    0px 0px 1px 0px ${props.theme.accentBg} 
}
50% {
    box-shadow: 1px -1px 35px 2px ${props.theme.accentBg},
    -3px 1px 4px 0px ${props.theme.accentBg}
}
100% {
    box-shadow: 0px 0px 15px 0px ${props.theme.accentBg},
    0px 0px 1px 0px ${props.theme.accentBg} 
}
`;

export const Container = styled(motion.div)`
    position: absolute;
    display: flex;
    top: 3rem;
    right: 0;
    height: 3rem;
    max-width: 21.87rem;
    background: ${(props) => props.theme.background};
    border-bottom-left-radius: 16em;
    border-top-left-radius: 16em;

    .motion-icon:first-child {
        border-bottom-left-radius: inherit;
        border-top-left-radius: inherit;
    }

    ${(props) =>
        props.isOpen &&
        css`
            box-shadow: -2px 2px 4px -1px rgba(0, 0, 0, 0.2),
                -4px 4px 5px 0px rgba(0, 0, 0, 0.14),
                -1px 1px 10px 0px rgba(0, 0, 0, 0.12);
        `}

    ${(props) =>
        !props.isOpen &&
        css`
            animation: ${ripple(props)} 1.5s ease infinite forwards;
            animation-delay: 0.6s;
        `}
`;
