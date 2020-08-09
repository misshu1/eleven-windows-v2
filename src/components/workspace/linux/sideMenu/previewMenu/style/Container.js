import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    background-color: var(--backgroundTransparent);
    overflow-y: auto;
    z-index: 149;
    width: 100%;
    height: 100%;

    @media only screen and (min-width: 450px) {
        width: 20rem;
    }
`;
