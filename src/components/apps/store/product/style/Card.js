import styled, { css } from 'styled-components';

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 12.5rem;
    padding: 0.5rem;
    user-select: none;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.productCardBg};
    box-shadow: ${(props) => props.theme.productCardBoxShadow};

    ${(props) =>
        props.type === 'donation' &&
        css`
            background: rgba(70, 143, 97, 0.5);
        `}
    ${(props) =>
        props.type === 'product' &&
        css`
            background: ${(props) => props.theme.productCardBg};
        `}

    p {
        margin: 0;
    }

    .product-img-container,
    .product-name,
    .product-rating,
    .product-new-price,
    .product-add-to-cart {
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
        background: ${(props) => props.theme.material.primary.main};
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
        border-color: ${(props) =>
            `transparent ${props.theme.material.primary.darker} transparent transparent`};
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

    .svg-bg {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2.5rem;
        background: ${(props) => props.theme.material.accent.main};
        transition: background 0.2s ease-in-out;
        border-top-right-radius: 0 0;
        border-bottom-right-radius: 37% 100%;

        svg {
            .fill-color {
                fill: #fff;
            }
            .stroke-color {
                stroke: #fff;
            }
        }
    }
`;
