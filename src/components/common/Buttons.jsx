import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

import { CartIcon } from 'assets/images/icons';
import { useCartContext, useDispatchCartContext } from 'contexts';

const StyledButton = styled(
    ({ icon, backgroundColor, backgroundHoverColor, color, ...props }) => (
        <Button {...props} classes={{ disabled: 'disabled' }} />
    )
)`
    && {
        position: relative;
        overflow: hidden;
        cursor: default;
        background-color: ${({ backgroundColor }) => backgroundColor};
        color: ${({ color }) => color};

        ${({ icon }) =>
            icon &&
            css`
                padding-left: 3rem;

                .icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 2.5rem;
                    transition: background 0.2s ease-in-out;
                    border-top-right-radius: 0 0;
                    border-bottom-right-radius: 37% 100%;
                    background: var(--secondary);
                }
            `};
    }

    &&:hover {
        background-color: ${({ backgroundHoverColor }) => backgroundHoverColor};
    }

    &.disabled {
        filter: grayscale(1);
        color: #d6d8de;
    }
`;

export const PrimaryButton = (props) => {
    const {
        backgroundColor,
        backgroundHoverColor,
        color,
        loading,
        disabled,
        fontIcon,
        svgIcon
    } = props;

    return (
        <StyledButton
            {...props}
            icon={!!fontIcon || !!svgIcon}
            disabled={disabled || loading}
            backgroundColor={backgroundColor || 'var(--primary)'}
            backgroundHoverColor={backgroundHoverColor || 'var(--primaryDark)'}
            color={color || '#fff'}
        >
            {(!!fontIcon || !!svgIcon) && (
                <div className='icon'>
                    {!loading && (
                        <>
                            {svgIcon && svgIcon}
                            {fontIcon && (
                                <FontAwesomeIcon icon={fontIcon} size='lg' />
                            )}
                        </>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            icon={['fas', 'spinner']}
                            pulse
                            size='lg'
                        />
                    )}
                </div>
            )}
            {props.children}
        </StyledButton>
    );
};

export const CheckoutButton = () => {
    const { getCheckoutUrl, isCheckoutLoading } = useCartContext();

    return (
        <PrimaryButton
            aria-label='checkout'
            style={{ flex: 1 }}
            fullWidth
            href={getCheckoutUrl()}
            target='_blank'
            rel='noreferrer'
            loading={isCheckoutLoading}
            fontIcon={['fas', 'angle-double-right']}
        >
            Checkout
        </PrimaryButton>
    );
};

export const AddToCartButton = ({ product }) => {
    const [unmounted, setUnmounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { isProductInCart } = useCartContext();
    const { addToCart } = useDispatchCartContext();
    const { t } = useTranslation();

    useEffect(() => {
        return () => {
            setUnmounted(true);
        };
    }, []);

    const handleAddToCart = () => {
        setLoading(true);
        addToCart(product).finally(() => {
            !unmounted && setLoading(false);
        });
    };

    return (
        <PrimaryButton
            aria-label='add product to cart'
            onClick={handleAddToCart}
            fullWidth
            loading={loading}
            disabled={isProductInCart(product)}
            svgIcon={<CartIcon width='1.5rem' height='1.5rem' />}
        >
            {isProductInCart(product)
                ? t('store.addedToCart')
                : t('store.addToCart')}
        </PrimaryButton>
    );
};
