import React, { useContext, useCallback } from 'react';
import { CartContainer } from '../style';
import Tooltip from '@material-ui/core/Tooltip';
import CartIcon from '../../../assets/images/icons/CartIcon';
import { useTranslation } from 'react-i18next';
import { TaskbarContext } from '../../../contexts/taskbarContext';

const CartIconApp = () => {
    const { startTaskbarApp, handleKeyPress } = useContext(TaskbarContext);
    const { t } = useTranslation();

    const toggle = useCallback(() => {
        startTaskbarApp('cartOpen');
    }, [startTaskbarApp]);

    const keyPress = useCallback(
        e => {
            handleKeyPress(e, 'cartOpen');
        },
        [handleKeyPress]
    );

    return (
        <Tooltip title={t('tooltip.cart')} placement='top' enterDelay={500}>
            <CartContainer tabIndex='0' onKeyPress={keyPress} onClick={toggle}>
                {/* <span className='fa-layers fa-fw'>
                    <CartIcon />
                    <span className='counter-style fa-layers-counter fa-layers-bottom-right fa-2x'>
                        3
                    </span>
                </span> */}
                <CartIcon />
            </CartContainer>
        </Tooltip>
    );
};

export default CartIconApp;
