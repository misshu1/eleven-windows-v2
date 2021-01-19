import { useCartContext } from 'contexts';
import React, { useCallback } from 'react';

import ProductApp from '../product/ProductApp';
import { Container } from './style';

const ProductsListApp = ({ setSelectedProduct }) => {
    const { products, productsReviews } = useCartContext();

    const renderProducts = useCallback(() => {
        const formatProducts = products.map((product) => ({
            id: product.id,
            variantId: product.variants[0].id,
            title: product.title,
            imagePreview: product.images[0]
                ? product.images[0].src
                : 'https://via.placeholder.com/140',
            newPrice: product.variants[0].price,
            oldPrice: product.variants[0].compareAtPrice,
            images:
                product.images.length !== 0
                    ? product.images.map((item) => item.src)
                    : ['none'],
            description: product.descriptionHtml
            // reviews: productsReviews
            //     .filter((p) => p.id === product.id)
            //     .map((item) => item.reviews)
        }));

        return formatProducts.map((product) => (
            <ProductApp
                key={product.id}
                product={product}
                setSelectedProduct={setSelectedProduct}
            />
        ));
    }, [products, setSelectedProduct]);

    return <Container>{renderProducts()}</Container>;
};

export default ProductsListApp;
