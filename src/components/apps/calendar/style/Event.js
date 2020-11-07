import styled from 'styled-components';

export const Event = styled.div`
    overflow: hidden;
    white-space: nowrap;
    padding: 2px;
    margin-left: 2px;
    background-color: ${({ background }) =>
        background ? background : 'var(--primary)'};
    color: ${({ color }) => (color ? color : '#fff')};
    border-radius: 2px;
    height: 1.3rem;
    font-size: 0.9rem;
    text-align: left;
`;
