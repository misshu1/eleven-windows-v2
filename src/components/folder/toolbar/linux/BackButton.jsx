import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import { folderPages } from '../../folderPages';

const BackButton = ({ page, changePage }) => {
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (page === folderPages.level_1) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [page]);

    const goBack = () => {
        switch (page) {
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
            disabled={isDisabled}
            onClick={goBack}
            type='button'
            aria-label='go back'
        >
            <span className='btn back-icon'>
                <FontAwesomeIcon icon={['fas', 'arrow-left']} size='lg' />
            </span>
        </button>
    );
};

export default BackButton;
