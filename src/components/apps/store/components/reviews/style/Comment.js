import styled from 'styled-components';

export const Comment = styled.div`
    margin: 2rem 0.5rem;
    border: 1px solid ${props => props.theme.reviewBorder};
    border-radius: 4px;

    .comment-header {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0.5rem;
        border-bottom: 1px solid ${props => props.theme.reviewBorder};
    }

    .left {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left,
    .icon {
        margin-right: 0.5rem;
    }

    .right {
        display: flex;
        flex: 1;
    }

    .date {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        white-space: nowrap;
    }

    .comment-content {
        display: inline-block;
        padding: 1rem;
    }
`;
