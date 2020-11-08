import styled from 'styled-components';
import { eventColors } from './eventColors';

export const Event = styled.div`
    overflow: hidden;
    white-space: nowrap;
    padding: 2px;
    margin-left: 2px;
    background-color: ${({ colorId }) =>
        colorId ? eventColors[colorId].background : eventColors[16].background};
    color: ${({ colorId }) =>
        colorId ? eventColors[colorId].foreground : eventColors[16].foreground};
    border-radius: 2px;
    height: 1.3rem;
    font-size: 0.9rem;
    font-weight: bold;
    text-align: left;
`;
