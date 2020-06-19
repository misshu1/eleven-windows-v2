import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Icon } from './style';

const IconApp = (props) => {
    const { t } = useTranslation();
    const { tooltip, onClick, icon, fontIcon, motionProps } = props;

    return (
        <motion.div {...motionProps}>
            <Tooltip title={t(tooltip)} placement='bottom' enterDelay={500}>
                <Icon onClick={onClick}>
                    {icon && icon}
                    {fontIcon && <FontAwesomeIcon icon={fontIcon} size='lg' />}
                </Icon>
            </Tooltip>
        </motion.div>
    );
};

export default IconApp;
