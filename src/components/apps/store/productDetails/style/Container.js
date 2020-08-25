import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.5rem;
    max-width: 80rem;
    margin: 0 auto;

    .carousel-container {
        display: flex;
        flex-wrap: wrap;

        .carousel {
            max-width: 52rem;
            width: 100%;
            margin: 0 auto;
        }
    }

    .description {
        margin: 2rem 0;

        hr {
            border: 1px solid var(--border);
        }

        blockquote {
            font: 14px/20px italic Roboto, serif;
            padding: 0.5rem;
            margin: 0.5rem;
            text-indent: 1rem;
            background: var(--backgroundCard);
            border-left: 4px solid var(--border);
        }

        blockquote:before {
            content: open-quote;
            font-size: 3.5em;
            line-height: 0.1em;
            margin-right: 0.25em;
            vertical-align: -0.4em;
        }

        blockquote p {
            display: inline;
            font-style: italic;
            font-size: 1.2rem;
        }
    }
`;
