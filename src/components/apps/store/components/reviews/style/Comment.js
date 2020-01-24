import styled from 'styled-components';

export const Comment = styled.div`
    margin: 2rem 0;

    .comment-header {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .avatar,
    .rating {
        margin: 0 1rem;
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
        margin: 0.5rem 1rem 0 1rem;
    }
`;
