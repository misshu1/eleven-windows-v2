import styled, { css } from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    background-color: var(--backgroundCard);
    box-shadow: 0px 0px 10px -7px var(--boxShadow);
    margin: 1rem 0.5rem;
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
    position: relative;

    ${(props) =>
        props.type === 'donation' &&
        css`
            background: rgba(70, 143, 97, 0.5);
        `}

    ${(props) =>
        props.type === 'product' &&
        css`
            background-color: var(--backgroundCard);
        `}

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 3.25rem;
            height: 3.25rem;
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
    }

    .remove-product:hover {
        .icon {
            transform: rotate(10deg);
            transition: transform 0.2s;
        }
    }
`;
