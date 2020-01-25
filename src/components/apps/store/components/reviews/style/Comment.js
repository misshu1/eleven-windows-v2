import styled from 'styled-components';

export const Comment = styled.div`
    margin: 2rem 0.5rem;
    border: 1px solid ${props => props.theme.reviewBorder};
    border-radius: 4px;

    .comment-header {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0.5rem 0;
        border-bottom: 1px solid ${props => props.theme.reviewBorder};
    }

    .avatar,
    .rating {
        margin: 0 0.5rem;
    }

    .user {
    }

    .date {
        flex: 1;
        justify-content: flex-end;
        text-align: right;
        padding-right: 1rem;
    }

    .comment-content {
        display: inline-block;
        padding: 1rem;
    }
`;
