import { motion } from 'framer-motion';
import styled from 'styled-components';
import { zIndex } from 'components/theme/zIndex';

export const Container = styled(motion.div)`
    background-color: var(--backgroundTransparent);
    overflow-y: auto;
    z-index: ${zIndex.linux.sideMenu.preview};
    height: 100%;
    width: 20rem;
`;
