import styled from 'styled-components';

export const Icon = styled.div`
    display: flex;
    font-size: 1.3rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    background: ${(props) => props.isActive && '#212736'};
`;
