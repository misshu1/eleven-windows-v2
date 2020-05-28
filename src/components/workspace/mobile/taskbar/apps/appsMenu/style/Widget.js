import styled from 'styled-components';

export const Widget = styled.div`
    svg {
        height: 3rem;
        width: 3rem;
    }

    && a {
        display: block;
        width: 100%;
        height: 100%;
        color: ${(props) => props.theme.startMenuColor};
        cursor: default;
        text-align: center;
        text-decoration: none;
    }

    .app-name {
        margin-top: 0.5rem;
    }
`;
