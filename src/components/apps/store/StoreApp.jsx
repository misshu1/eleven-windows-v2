import React, { useEffect, useState } from 'react';

import { useDispatchCartContext, useFolderPagesContext } from 'contexts';
import FolderApp from 'components/folder/FolderApp';
import ProductDetailsApp from './productDetails/ProductDetailsApp';
import ProductsListApp from './productsList/ProductsListApp';
import { FOLDER_PAGES } from 'components/common';

const StoreApp = () => {
    const [selectedProduct, setSelectedProduct] = useState({});
    const { page } = useFolderPagesContext();
    const { getProducts } = useDispatchCartContext();

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <FolderApp appId={4} marginLeft={60} marginTop={60} enablePagination>
            {page === FOLDER_PAGES.level_1 && (
                <ProductsListApp setSelectedProduct={setSelectedProduct} />
            )}
            {page === FOLDER_PAGES.level_2 && (
                <ProductDetailsApp product={selectedProduct} />
            )}
        </FolderApp>
    );
};

export default StoreApp;
