import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { zIndex } from 'components/theme/zIndex';

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
    z-index: ${zIndex.linux.sideMenu.svg};
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
`;
