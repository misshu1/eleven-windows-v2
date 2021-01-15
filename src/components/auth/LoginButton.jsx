import { PrimaryButton } from 'components/common/Buttons';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LoginButton = ({ onClick }) => {
    const { t } = useTranslation();

    return (
        <PrimaryButton
            fullWidth
            onClick={onClick}
            aria-label='go to login'
            style={{ flex: 1 }}
            fontIcon={['fas', 'sign-in-alt']}
        >
            {t('auth.login')}
        </PrimaryButton>
    );
};

export default LoginButton;
