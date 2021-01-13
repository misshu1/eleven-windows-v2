import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    max-width: 80rem;
    margin: 0 auto;

    h1,
    h2,
    h3 {
        display: flex;
        align-items: flex-end;
        margin-top: 3rem;
    }

    a {
        text-decoration: none;
        font-weight: 900;
        color: var(--primaryText);
        border-bottom: 1px solid var(--primaryText);
    }

    p {
        margin: 2rem 0;
        line-height: 27px;
    }

    li {
        line-height: 27px;
    }
`;
