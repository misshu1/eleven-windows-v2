import { motion } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';

const ripple = keyframes`
0% {
    box-shadow: 0px 0px 15px 0px var(--primary),
    0px 0px 1px 0px var(--primary) 
}
50% {
    box-shadow: 1px -1px 35px 2px var(--primary),
    -3px 1px 4px 0px var(--primary)
}
100% {
    box-shadow: 0px 0px 15px 0px var(--primary),
    0px 0px 1px 0px var(--primary) 
}
`;

export const Container = styled(motion.div)`
    position: absolute;
    display: flex;
    top: 3rem;
    right: 0;
    height: 3rem;
    max-width: 21.87rem;
    background-color: var(--background);
    border-bottom-left-radius: 16em;
    border-top-left-radius: 16em;

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
            animation: ${ripple} 1.5s ease infinite forwards;
            animation-delay: 0.6s;
        `}
`;
