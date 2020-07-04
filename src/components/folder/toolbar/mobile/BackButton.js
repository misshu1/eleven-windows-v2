import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { folderPages } from '../../folderPages';

const BackButton = ({ page, setPage }) => {
    const history = useHistory();

    const goBack = () => {
        if (!page) {
            return history.push('/');
        }

        switch (page) {
            case folderPages.level_1:
                return history.push('/');

            case folderPages.level_2:
                return setPage(folderPages.level_1);

            case folderPages.level_3:
                return setPage(folderPages.level_2);

            case folderPages.level_4:
                return setPage(folderPages.level_3);

            case folderPages.level_5:
                return setPage(folderPages.level_4);

            case folderPages.level_6:
                return setPage(folderPages.level_5);

            case folderPages.level_7:
                return setPage(folderPages.level_6);

            case folderPages.level_8:
                return setPage(folderPages.level_7);

            case folderPages.level_9:
                return setPage(folderPages.level_8);

            default:
                throw new Error(`The Page "${page}" doesn't exist`);
        }
    };

    return (
        <button className='back-button' onClick={goBack} type='button'>
            <FontAwesomeIcon icon={['fas', 'arrow-left']} size='lg' />
        </button>
    );
};

export default BackButton;
