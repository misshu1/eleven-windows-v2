import styled from 'styled-components';

export const IconContainer = styled.div`
    border: 1px solid transparent;
    outline: none;

    svg {
        height: 3.2rem;
        width: 3.2rem;
    }

    && a {
        display: block;
        width: 100%;
        height: 100%;
        color: #d6d8de;
        cursor: default;
        text-align: center;
        text-decoration: none;
        border: 1px solid transparent;
    }
    .app-name {
        margin-top: 0.5rem;
    }
`;
