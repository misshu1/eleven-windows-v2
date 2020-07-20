import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AuthContiner = styled(motion.div)`
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.background};
    padding: 0.5rem;
    width: 100%;
    height: 100%;

    @media only screen and (min-width: 450px) {
        width: 25rem;
        border-radius: 0.5em;
        box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.2),
            0px 0px 6px 0px rgba(0, 0, 0, 0.14),
            0px 0px 12px 0px rgba(0, 0, 0, 0.12);
    }

    @media only screen and (min-height: 600px) and (min-width: 450px) {
        height: 40rem;
    }
`;
