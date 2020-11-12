import styled from 'styled-components';
import { eventColors } from './colors';

export const Summary = styled.div`
    overflow: hidden;
    white-space: nowrap;
    padding: 2px;
    margin-left: 2px;
    background-color: ${({ colorId }) =>
        colorId ? eventColors[colorId].background : eventColors[9].background};
    color: ${({ colorId }) =>
        colorId ? eventColors[colorId].foreground : eventColors[9].foreground};
    border-radius: 2px;
    height: 1.3rem;
    font-size: 0.9rem;
    font-weight: bold;
    text-align: left;
`;
