import { useCallback, useEffect, useState } from 'react';

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

const useFolderScroll = (page, scrollTop, setScrollTop) => {
    const [scroll, setScroll] = useState(defaultFolderScrollState);
    const prevPage = usePrevious(page);

    const getPage = useCallback((page) => {
        return getPageName(page);
    }, []);

    useEffect(() => {
        // Only save 'scrollTop' data when folder have pagination
        if (page) {
            if (scroll[getPage(prevPage)] !== scroll[getPage(page)]) {
                // This will run when switching pages
                // Go back to previous 'scrollTop' position

                setScrollTop(scroll[getPage(page)]);
            } else if (
                scroll[getPage(prevPage)] !== scrollTop &&
                scrollTop !== 0
            ) {
                // This will run when scrolling
                // Save the 'scrollTop' position

                setScroll((prevState) => ({
                    ...prevState,
                    [getPage(prevPage)]: scrollTop,
                }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollTop, page]);
};

export default useFolderScroll;
