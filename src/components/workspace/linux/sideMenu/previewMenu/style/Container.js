import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    background-color: var(--backgroundTransparent);
    overflow-y: auto;
    z-index: 149;
    height: 100%;
    width: 20rem;
`;
