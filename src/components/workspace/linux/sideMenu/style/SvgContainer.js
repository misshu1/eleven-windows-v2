import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const animateSVGGradiant = keyframes`
0% {
    stop-color: ${(props) => props.theme.accentBg};
}
50% {
    stop-color: transparent;
}
100% {
    stop-color: ${(props) => props.theme.accentBg};
}
`;

export const SvgContainer = styled(motion.div)`
    display: none;

    @media (min-width: 28rem) {
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