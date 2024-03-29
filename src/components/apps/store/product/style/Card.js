import styled, { css } from 'styled-components';

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 12.5rem;
    padding: 0.5rem 0.5rem 1.5rem 0.5rem;
    user-select: none;
    border-radius: 0.5rem;
    background-color: var(--backgroundCard);
    box-shadow: 0px 0px 10px -7px var(--boxShadow);

    &&:hover {
        box-shadow: 0px 0px 0px -2px var(--boxShadow),
            0px 0px 0px -7px var(--boxShadow),
            0px 0px 10px -2px var(--boxShadow);
    }

    ${({ type }) =>
        type === 'donation' &&
        css`
            background-color: rgba(70, 143, 97, 0.5);
        `}
    ${({ type }) =>
        type === 'product' &&
        css`
            background-color: var(--backgroundCard);
        `}

    p {
        margin: 0;
    }

    .product-img-container,
    .product-name,
    .product-rating,
    .product-new-price {
        margin: 0 0 1rem 0;
    }

    .product-name {
        display: inline-block;
        flex: 1;
    }

    .product-discount {
        position: absolute;
        color: #f2f2f2;
        left: -5px;
        top: 0.5rem;
        width: 4rem;
        background-color: var(--primary);
        padding: 0.2rem;
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        z-index: 10;
        overflow: unset;
    }

    .product-discount::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 5px 5px 0;
        border-color: transparent var(--primaryDark) transparent transparent;
        bottom: -5px;
        left: 0;
    }

    .product-img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10rem;
    }

    .product-discount,
    .product-old-price,
    .product-new-price {
        letter-spacing: 1px;
    }

    .product-rating {
        min-height: 2rem;
    }

    .product-old-price {
        position: relative;
        display: block;
        min-height: 1.2rem;
    }

    .product-old-price::after {
        content: '';
        position: absolute;
        height: 3px;
        width: 100%;
        right: 0;
        top: 40%;
        background: #e54b4b;
        transform: rotate(10deg);
        border-radius: 8px;
    }

    .product-new-price {
        font-size: 1.5rem;
        white-space: nowrap;
    }

    img {
        max-height: 8.75rem;
        width: 8.75rem;
    }
`;
