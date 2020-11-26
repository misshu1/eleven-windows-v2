import styled from 'styled-components';

export const ScorePanelContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 0.5rem;
    place-items: center;
    max-width: 31rem;
    margin: 0 auto;
    padding: 1rem 0;

    .stars {
        color: var(--primary);

        .icon:nth-child(2) {
            color: ${({ moves }) => moves > 40 && 'var(--grey60)'};
        }

        .icon:nth-child(3) {
            color: ${({ moves }) => moves > 32 && 'var(--grey60)'};
        }
    }
`;
