import { motion } from 'framer-motion';
import styled from 'styled-components';

export const IconsMenuContainer = styled(motion.div)`
    z-index: 150;
    height: 100%;
    width: 3.5rem;
    background: ${(props) => props.theme.startMenuBg};
`;
