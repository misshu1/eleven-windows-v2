import { FOLDER_PAGES } from 'components/common';
import { useCallback, useEffect, useState } from 'react';

import { useFolderPagesContext } from '../contexts/folderPagesContext';
import { usePrevious } from './usePrevious';

// Used as an object key for 'defaultFolderScrollState' object
export const pageScrollName = (page) => `${page}_scroll`;
const defaultFolderScrollState = {};

// Use 'FOLDER_PAGES' Object.keys to create new Object using 'pageScrollName' and add it to 'defaultFolderScrollState'
Object.keys(FOLDER_PAGES).map(
    (page) => (defaultFolderScrollState[pageScrollName(page)] = 0)
);

// TODO The 'page' defalt state sould be changed to
// {
//     page: level_1,
//     id: 'unique id' // this will match the scroll id
//     isSelected: true
// }
// When switching pages add the 'isSelected' set to true alongside with the id
// If there is no need for an id it should be set to a default value '1'

// TODO The back button should check for the 'isSelected' flag
// And return the slected object scroll position

// TODO each key element from the 'defaultFolderScrollState'
// should be an array of objects like the example bellow
// level_1_scroll : [
//     {
//         id: 'unique id',
//         scroll: 200,
//         isSelected: true
//     }
// ],
// level_2_scroll : [
//     {
//         id: 'unique id',
//         scroll: 200
//         isSelected: false
//     },
//     {
//         id: 'unique id',
//         scroll: 500
//         isSelected: true
//     },
// ],
// level_3_scroll : [
//     {
//         id: 'unique id',
//         scroll: 200
//         isSelected: true
//     }
// ]

const getPageName = (page) => {
    const pageName = Object.entries(FOLDER_PAGES)
        .filter((item) => item[1] === page)
        .map((item) => pageScrollName(item[0]));

    return pageName[0];
};

export const useFolderScroll = (scrollTop, setScrollTop) => {
    const [scroll, setScroll] = useState(defaultFolderScrollState);
    const { page } = useFolderPagesContext();
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
                    [getPage(prevPage)]: scrollTop
                }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollTop, page]);
};
