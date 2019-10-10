import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 3.5rem;
    padding: 0.5rem;
    width: 100%;
    overflow-y: auto;

    /* Hide Scrollbar */
    -ms-overflow-style: none;
    &&::-webkit-scrollbar {
        display: none;
    }
`;
