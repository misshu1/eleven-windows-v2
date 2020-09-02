import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ErrorContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--colorDefault);
    background-color: var(--background);
    padding: 0.5rem;
    width: 100%;
    height: 100%;
    z-index: 100;

    .error-code,
    .error-title,
    .error-message {
        text-align: center;
    }

    .error-code {
        font-size: 6rem;
        margin: 0;
    }

    .error-message {
        line-height: 1.6;
    }

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
