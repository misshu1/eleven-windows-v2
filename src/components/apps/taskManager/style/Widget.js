import styled from 'styled-components';

export const Widget = styled.div`
    display: flex;
    align-items: center;

    && img {
        height: 2rem;
        width: 2rem;
        margin: 0 1rem 0 0.2rem;
    }

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
