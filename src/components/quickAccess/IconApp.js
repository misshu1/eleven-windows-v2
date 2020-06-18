import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Icon } from './style';

const IconApp = (props) => {
    const { t } = useTranslation();
    const { tooltip, onClick, icon, fontIcon } = props;

    return (
        <Tooltip title={t(tooltip)} placement='bottom' enterDelay={500}>
            <Icon onClick={onClick}>
                {icon && icon}
                {fontIcon && <FontAwesomeIcon icon={fontIcon} size='lg' />}
            </Icon>
        </Tooltip>
    );
};

export default IconApp;
