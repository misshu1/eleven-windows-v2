import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useDispatchCartContext } from 'contexts';
import { ProductContainer } from './style';

const Product = ({ product }) => {
    const { removeFromCart } = useDispatchCartContext();

    return (
        <ProductContainer type={product.type}>
            <div className='img-container'>
                <img src={product.imagePreview} alt='product.title' />
            </div>
            <div className='product-info'>
                <h4 className='title'>{product.title}</h4>
                <p className='price'>
                    <strong>{product.newPrice} $</strong>
                </p>
            </div>
            <div
                className='remove-product'
                onClick={() => removeFromCart(product.id)}
            >
                <FontAwesomeIcon
                    icon={['fas', 'trash-alt']}
                    size='lg'
                    className='icon'
                />
            </div>
        </ProductContainer>
    );
};

export default Product;
