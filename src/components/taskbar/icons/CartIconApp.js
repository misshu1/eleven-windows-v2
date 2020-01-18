import React, { useContext, useCallback } from 'react';
import { CartContainer } from '../style';
import Tooltip from '@material-ui/core/Tooltip';
import CartIcon from '../../../assets/images/icons/CartIcon';
import { useTranslation } from 'react-i18next';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import Badge from '@material-ui/core/Badge';

const CartIconApp = () => {
    const { taskbar, startTaskbarApp, handleKeyPress } = useContext(
        TaskbarContext
    );
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
            <CartContainer
                open={taskbar.cartOpen}
                tabIndex='0'
                onKeyPress={keyPress}
                onClick={toggle}
            >
                <Badge
                    badgeContent={0}
                    color='error'
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    showZero={false}
                >
                    <CartIcon />
                </Badge>
            </CartContainer>
        </Tooltip>
    );
};

export default CartIconApp;
