import styled from 'styled-components';

export const ScorePanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
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
