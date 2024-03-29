import styled, { css } from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    background-color: var(--backgroundCard);
    box-shadow: 0px 0px 10px -7px var(--boxShadow);
    margin: 1rem 0.5rem;
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
    position: relative;

    ${({ type }) =>
        type === 'donation' &&
        css`
            background: rgba(70, 143, 97, 0.5);
        `}

    ${({ type }) =>
        type === 'product' &&
        css`
            background-color: var(--backgroundCard);
        `}

    &&:hover {
        box-shadow: 0px 0px 0px -2px var(--boxShadow),
            0px 0px 0px -7px var(--boxShadow),
            0px 0px 10px -2px var(--boxShadow);
    }

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 3.25rem;
            height: 3.25rem;
            object-fit: contain;
        }
    }

    .product-info {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-right: 3rem;

        .title {
            margin: 0;
        }

        .price {
            font-size: 1.5rem;
            white-space: nowrap;
            margin: 1rem 0 0 0;
        }
    }

    .remove-product {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: auto;
        background-color: var(--primary);
        color: #fff;
        width: 3rem;
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
        outline: none;
        border: none;
    }

    .remove-product:disabled {
        filter: grayscale(1);
        color: #d6d8de;
    }

    .remove-product:hover {
        .icon {
            transform: rotate(10deg);
            transition: transform 0.2s;
        }
    }
`;
