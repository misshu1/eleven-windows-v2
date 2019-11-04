import styled from 'styled-components';

export const Container = styled.section`
    user-select: none;
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow: hidden;
    bottom: 3rem;
    right: 0;
    left: 0;

    @media (min-width: 28rem) {
        padding-left: 0.5rem;
        left: auto;
    }
`;
