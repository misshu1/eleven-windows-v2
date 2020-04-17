import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LogoContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 3.5rem;
    background: ${(props) => props.theme.background};
    border-radius: 0.5rem;
`;
