import { useEffect, useState } from 'react';

import { folderPages } from '../components/folder/folderPages';
import usePrevious from './usePrevious';

// Used as an object key for 'defaultFolderScrollState' object
export const pageScrollName = (page) => `${page}_scroll`;
const defaultFolderScrollState = {};

// Use 'folderPages' Object.keys to create new Object using 'pageScrollName' and add it to 'defaultFolderScrollState'
Object.keys(folderPages).map(
    (page) => (defaultFolderScrollState[pageScrollName(page)] = 0)
);

const getPageName = (page) => {
    const pageName = Object.entries(folderPages)
        .filter((item) => item[1] === page)
        .map((item) => pageScrollName(item[0]));

    return pageName[0];
};

const useFolderScroll = (isLoading = false, page, scrollTop, setScrollTop) => {
    const [scroll, setScroll] = useState(defaultFolderScrollState);
    const prevPage = usePrevious(page);
    const lastPage = getPageName(prevPage);
    const currentPage = getPageName(page);

    useEffect(() => {
        if (!isLoading) {
            if (scroll[lastPage] !== scroll[currentPage] || scrollTop === 0) {
                if (scroll[lastPage] <= 1) {
                    // Prevent updating state unnecessary when scrolling up
                    return;
                }

                // This will run when switching pages
                // Go back to previous 'scrollTop' position when navigating between folder pages
                setScrollTop(scroll[currentPage]);
            } else if (scroll[lastPage] !== scrollTop && scrollTop !== 0) {
                // This will run when scrolling
                // Update folder page 'scrollTop' position when scrolling
                setScroll((prevState) => ({
                    ...prevState,
                    [lastPage]: scrollTop,
                }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, scrollTop, page]);
};

export default useFolderScroll;
