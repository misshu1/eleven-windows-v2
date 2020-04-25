import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    background: ${(props) => props.theme.startMenuBg};
    overflow-y: auto;
    z-index: 149;
    width: 100%;
    height: 100%;

    @media (min-width: 28rem) {
        width: 20rem;
    }
`;
