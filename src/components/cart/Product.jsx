import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import { useDispatchCartContext } from 'contexts';
import { ProductContainer } from './style';

const Product = ({ product }) => {
    const [unmounted, setUnmounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { removeFromCart } = useDispatchCartContext();

    useEffect(() => {
        return () => {
            setUnmounted(true);
        };
    }, []);

    const handleRemoveFromCart = () => {
        setLoading(true);
        removeFromCart(product).finally(() => {
            !unmounted && setLoading(false);
        });
    };

    return (
        <ProductContainer type={product.type}>
            <div className='img-container'>
                <img src={product.imagePreview} alt={product.title} />
            </div>
            <div className='product-info'>
                <h4 className='title'>{product.title}</h4>
                <p className='price'>
                    <strong>{product.newPrice} $</strong>
                </p>
            </div>
            <button
                className='remove-product'
                onClick={handleRemoveFromCart}
                disabled={loading}
            >
                {!loading && (
                    <FontAwesomeIcon
                        icon={['fas', 'trash-alt']}
                        size='lg'
                        className='icon'
                    />
                )}
                {loading && (
                    <FontAwesomeIcon
                        icon={['fas', 'spinner']}
                        pulse
                        size='lg'
                    />
                )}
            </button>
        </ProductContainer>
    );
};

export default Product;
