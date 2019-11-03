import React, { useContext } from 'react';
import { GlobalAppContext } from '../../../contexts/GlobalContext';
import { Box, Icon, Title } from './style';
import folderIcon from '../../../assets/images/icons/folder.svg';

const Resize = () => {
    const { changeAppSize } = useContext(GlobalAppContext);
    return (
        <React.Fragment>
            <Title>Resize App</Title>
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
        </React.Fragment>
    );
};

export default Resize;
