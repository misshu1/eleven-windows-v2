import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem 0;
    border-radius: 4px;
    background: var(--backgroundCard);
    box-shadow: 0px 0px 10px -7px var(--boxShadow);

    .review-header {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0.5rem;
        border-bottom: 1px solid var(--borderCard);
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
        white-space: nowrap;
        flex: 1;
        padding-left: 0.5rem;
    }

    .review-content {
        display: inline-block;
        padding: 1rem;
        margin: 0;
        line-height: 1.4;
    }
`;
