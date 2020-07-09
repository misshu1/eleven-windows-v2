import React, { useCallback } from 'react';

import ProductApp from '../product/ProductApp';
import { Container } from './style';

const ProductsListApp = ({ products, setSelectedProduct, setPage }) => {
    const renderProducts = useCallback(() => {
        return products.map((product) => (
            <ProductApp
                key={product.id}
                product={product}
                setSelectedProduct={setSelectedProduct}
                setPage={setPage}
            />
        ));
    }, [products, setPage, setSelectedProduct]);

    return <Container>{renderProducts()}</Container>;
};

export default ProductsListApp;
