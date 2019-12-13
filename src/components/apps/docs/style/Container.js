import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 1rem;

    h1,
    h2 {
        font-family: 'Roboto', sans-serif;
    }

    h2 {
        margin-top: 4rem;
    }

    .text-highlight {
        font-size: 1.1rem;
        font-weight: 900;
        border-bottom: 1px solid ${props => props.theme.accentBgLight};
        color: ${props => props.theme.accentBgLight};
    }

    .required {
        color: ${props => props.theme.accentBgLight};
        font-weight: 900;
        font-size: 0.8rem;
    }
`;
