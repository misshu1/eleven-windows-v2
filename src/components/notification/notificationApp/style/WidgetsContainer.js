import styled from 'styled-components';

export const WidgetsContainer = styled.div`
    display: none;

    @media (min-width: 28rem) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        align-items: center;
        padding: 0.4rem;
    }
`;
