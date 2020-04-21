import React from 'react';
import { useTranslation } from 'react-i18next';

import folderIcon from '../../../assets/images/icons/folder.svg';
import { useSettingsContext } from '../../../contexts/settingsContext';
import { Box, Icon, Spacer, Title } from './style';

const Resize = () => {
    const { t } = useTranslation();
    const { changeAppSize } = useSettingsContext();

    return (
        <Spacer>
            <Title>{t('settings.title.resize')}</Title>
            <Box style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                <Icon
                    iconSize='6.875'
                    imgSize='4.6875'
                    onClick={() => changeAppSize(20)}
                >
                    <div className='icon'>
                        <img
                            src={folderIcon}
                            alt='folder icon'
                            aria-label='folder icon'
                            draggable='false'
                        />
                        <div style={{ fontSize: '1.25rem' }}>125%</div>
                    </div>
                </Icon>
                <Icon
                    iconSize='5.5'
                    imgSize='3.75'
                    onClick={() => changeAppSize(16)}
                >
                    <div className='icon'>
                        <img
                            src={folderIcon}
                            alt='folder icon'
                            aria-label='folder icon'
                            draggable='false'
                        />
                        <div style={{ fontSize: '1rem' }}>100%</div>
                    </div>
                </Icon>
                <Icon
                    iconSize='4.125'
                    imgSize='2.8125'
                    onClick={() => changeAppSize(12)}
                >
                    <div className='icon'>
                        <img
                            src={folderIcon}
                            alt='folder icon'
                            aria-label='folder icon'
                            draggable='false'
                        />
                        <div style={{ fontSize: '.75rem' }}>75%</div>
                    </div>
                </Icon>
                <Icon
                    iconSize='2.75'
                    imgSize='1.875'
                    onClick={() => changeAppSize(8)}
                >
                    <div className='icon'>
                        <img
                            src={folderIcon}
                            alt='folder icon'
                            aria-label='folder icon'
                            draggable='false'
                        />
                        <div style={{ fontSize: '.5rem' }}>50%</div>
                    </div>
                </Icon>
            </Box>
        </Spacer>
    );
};

export default Resize;
