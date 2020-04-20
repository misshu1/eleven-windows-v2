import styled from 'styled-components';

export const Container = styled.div`
    display: none;

    @media (min-width: 28rem) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 4.5rem;
        margin-top: 3.5rem;
    }
`;
