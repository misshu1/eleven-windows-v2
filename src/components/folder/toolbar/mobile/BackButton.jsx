import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { folderPages } from '../../folderPages';

const BackButton = ({ page, changePage }) => {
    const navigate = useNavigate();

    const goBack = () => {
        if (!page) {
            return navigate('/');
        }

        switch (page) {
            case folderPages.level_1:
                return navigate('/');

            case folderPages.level_2:
                return changePage(folderPages.level_1);

            case folderPages.level_3:
                return changePage(folderPages.level_2);

            case folderPages.level_4:
                return changePage(folderPages.level_3);

            case folderPages.level_5:
                return changePage(folderPages.level_4);

            case folderPages.level_6:
                return changePage(folderPages.level_5);

            case folderPages.level_7:
                return changePage(folderPages.level_6);

            case folderPages.level_8:
                return changePage(folderPages.level_7);

            case folderPages.level_9:
                return changePage(folderPages.level_8);

            default:
                throw new Error(`The Page "${page}" doesn't exist`);
        }
    };

    return (
        <button
            className='back-button'
            onClick={goBack}
            type='button'
            aria-label='go back'
        >
            <FontAwesomeIcon icon={['fas', 'arrow-left']} size='lg' />
        </button>
    );
};

export default BackButton;
