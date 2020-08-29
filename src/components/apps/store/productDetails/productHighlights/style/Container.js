import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    min-width: 20rem;
    padding: 0.5rem;

    .product-title {
        margin: 0;
        margin-bottom: 1.5rem;
        text-transform: capitalize;
    }

    .product-rating {
        display: flex;
        align-items: center;
    }

    .product-reviews-count,
    .product-average-rating {
        margin: 0;
        font-size: 1.1rem;
    }

    .product-average-rating {
        margin-left: 0.5rem;
    }

    .price-container {
        margin: 1.5rem 0;
    }

    .product-old-price,
    .product-new-price {
        letter-spacing: 1px;
        width: fit-content;
        margin: 0;
    }

    .product-old-price {
        position: relative;
        display: inline-block;
        min-height: 1.2rem;
        font-size: 1.4rem;
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
        font-size: 2rem;
        white-space: nowrap;
    }

    .product-discount {
        font-size: 1.2rem;
        margin-left: 0.5rem;
        letter-spacing: 1px;
    }
`;
