import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const animateSVGGradiant = keyframes`
0% {
    stop-color: var(--primary);
}
50% {
    stop-color: transparent;
}
100% {
    stop-color: var(--primary);
}
`;

export const SvgContainer = styled(motion.div)`
    display: none;

    @media only screen and (min-width: 450px) {
        z-index: 145;
        display: block;
        width: 0px;

        svg {
            height: 100%;
            #gradiant {
                stop {
                    animation: ${animateSVGGradiant} 3s infinite;
                }
            }
        }
    }
`;
