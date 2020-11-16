import React, { useEffect, useState } from 'react';

import {
    useFirebaseContext,
    useFolderPagesContext,
    useNotificationsContext
} from 'contexts';
import FolderApp from 'components/folder/FolderApp';
import ProductDetailsApp from './productDetails/ProductDetailsApp';
import ProductsListApp from './productsList/ProductsListApp';

const StoreApp = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const { page, changePage, FOLDER_PAGES } = useFolderPagesContext();
    const { showError } = useNotificationsContext();
    const { firestore } = useFirebaseContext();

    useEffect(() => {
        getProducts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProducts = async () => {
        try {
            await firestore.collection('products').onSnapshot((snapshot) => {
                if (!snapshot.size) {
                    return showError(
                        'Error',
                        'The "products" collection was not found in the database!',
                        404
                    );
                }

                const dbProducts = snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });

                setProducts(dbProducts);
            });
        } catch (err) {
            showError(
                'Error',
                'Failed to get store products from database!',
                500
            );
        }
    };

    return (
        <FolderApp
            appId={4}
            marginLeft={60}
            marginTop={60}
            page={page}
            changePage={changePage}
        >
            {page === FOLDER_PAGES.level_1 && (
                <ProductsListApp
                    products={products}
                    setSelectedProduct={setSelectedProduct}
                    changePage={changePage}
                />
            )}
            {page === FOLDER_PAGES.level_2 && (
                <ProductDetailsApp product={selectedProduct} />
            )}
        </FolderApp>
    );
};

export default StoreApp;
