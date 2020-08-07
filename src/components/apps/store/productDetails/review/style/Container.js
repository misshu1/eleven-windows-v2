import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem 0;
    border: 1px solid
        ${(props) =>
            props.isOwnReview
                ? props.theme.accentBg
                : props.theme.reviewBorder};
    border-radius: 4px;
    background: ${(props) => props.theme.productCardBg};

    &&:hover {
        box-shadow: ${(props) => props.theme.productCardBoxShadow};
    }

    .review-header {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0.5rem;
        border-bottom: 1px solid
            ${(props) =>
                props.isOwnReview
                    ? props.theme.accentBg
                    : props.theme.reviewBorder};
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
