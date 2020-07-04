import React from 'react';

const ProductDetailsApp = ({ product }) => {
    return (
        <div>
            <h3>{product.title}</h3>
            <p>This section its not done, yet</p>
            {/* Need to be added in firebase */}
            {/* {product.images} */}
            {/* {product.newPrice} */}
            {/* {product.oldPrice} */}
            {/* {product.description} */}
        </div>
    );
};

export default ProductDetailsApp;
