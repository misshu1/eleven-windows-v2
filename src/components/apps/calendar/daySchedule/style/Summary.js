import styled from 'styled-components';
import { eventColors } from '../../style/colors';

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 80rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: ${({ colorId }) =>
        colorId ? eventColors[colorId].background : eventColors[9].background};
    color: ${({ colorId }) =>
        colorId ? eventColors[colorId].foreground : eventColors[9].foreground};

    span:first-child {
        font-weight: bold;
    }

    span:nth-child(2) {
        font-size: 0.9rem;
    }
`;
