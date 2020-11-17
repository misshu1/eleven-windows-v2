import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FOLDER_PAGES, useFolderPagesContext } from 'contexts';
import React, { useEffect, useState } from 'react';

const BackButton = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const { page, changePage } = useFolderPagesContext();

    useEffect(() => {
        if (page === FOLDER_PAGES.level_1) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [page]);

    const goBack = () => {
        switch (page) {
            case FOLDER_PAGES.level_2:
                return changePage(FOLDER_PAGES.level_1);

            case FOLDER_PAGES.level_3:
                return changePage(FOLDER_PAGES.level_2);

            case FOLDER_PAGES.level_4:
                return changePage(FOLDER_PAGES.level_3);

            case FOLDER_PAGES.level_5:
                return changePage(FOLDER_PAGES.level_4);

            case FOLDER_PAGES.level_6:
                return changePage(FOLDER_PAGES.level_5);

            case FOLDER_PAGES.level_7:
                return changePage(FOLDER_PAGES.level_6);

            case FOLDER_PAGES.level_8:
                return changePage(FOLDER_PAGES.level_7);

            case FOLDER_PAGES.level_9:
                return changePage(FOLDER_PAGES.level_8);

            case FOLDER_PAGES.level_10:
                return changePage(FOLDER_PAGES.level_9);

            case FOLDER_PAGES.level_11:
                return changePage(FOLDER_PAGES.level_10);

            case FOLDER_PAGES.level_12:
                return changePage(FOLDER_PAGES.level_11);

            case FOLDER_PAGES.level_13:
                return changePage(FOLDER_PAGES.level_12);

            case FOLDER_PAGES.level_14:
                return changePage(FOLDER_PAGES.level_13);

            case FOLDER_PAGES.level_15:
                return changePage(FOLDER_PAGES.level_14);

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
