import { useEffect, useState } from 'react';

import { folderPages } from '../components/folder/folderPages';
import usePrevious from './usePrevious';

// Used as an object key for 'defaultFolderScrollState' object
export const pageScrollName = (page) => `${page}_scroll`;
const defaultFolderScrollState = {};

// Use 'folderPages' Object.keys to create new ones using 'pageScrollName' and add them to 'defaultFolderScrollState'
Object.keys(folderPages).map(
    (page) => (defaultFolderScrollState[pageScrollName(page)] = 0)
);

const getPageName = (page) => {
    const pageName = Object.entries(folderPages)
        .filter((item) => item[1] === page)
        .map((item) => pageScrollName(item[0]));

    return pageName[0];
};

const useFolderScroll = (
    isLoading = false,
    page,
    lastScrollPosition,
    setScrollTop
) => {
    const [scroll, setScroll] = useState(defaultFolderScrollState);
    const prevPage = usePrevious(page);

    useEffect(() => {
        const lastPage = getPageName(prevPage);
        const currentPage = getPageName(page);

        // TODO Make 'isLoading' a promise and await it here
        if (!isLoading) {
            if (scroll[lastPage] !== lastScrollPosition) {
                // Update for each folder page the 'scrollTop' position in state
                setScroll((prevState) => ({
                    ...prevState,
                    [lastPage]: lastScrollPosition,
                }));
            } else if (scroll[lastPage] !== scroll[currentPage]) {
                // Go back to previous folder 'scrollTop' position when navigating between folder pages
                setScrollTop(scroll[currentPage]);
            }
        }
    }, [isLoading, lastScrollPosition, page, prevPage, scroll, setScrollTop]);
};

export default useFolderScroll;
