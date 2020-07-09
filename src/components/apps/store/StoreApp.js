import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

import { useFirebaseContext } from '../../../contexts/firebaseContext';
import { useNotificationsContext } from '../../../contexts/notificationsContext';
import FolderApp from '../../folder/FolderApp';
import { folderPages } from '../../folder/folderPages';
import ProductDetailsApp from './productDetails/ProductDetailsApp';
import ProductsListApp from './productsList/ProductsListApp';

const StoreApp = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(folderPages.level_1);
    const [selectedProduct, setSelectedProduct] = useState({});
    const { showError } = useNotificationsContext();
    const { firestore } = useFirebaseContext();
    const getProducts = useRef(null);

    getProducts.current = async () => {
        let dbProducts = [];
        try {
            const productsRef = await firestore.collection('products').get();
            if (!productsRef.size) {
                showError(
                    'Error',
                    'The "products" collection was not found in the database!',
                    404
                );
            }
            await productsRef.forEach(
                (doc) =>
                    (dbProducts = [
                        ...dbProducts,
                        { id: doc.id, ...doc.data() },
                    ])
            );
            setProducts(dbProducts);
        } catch (err) {
            showError(
                'Error',
                'Failed to get store products from database!',
                500
            );
        }
    };

    useEffect(() => {
        getProducts.current();
    }, []);

    return (
        <FolderApp
            appId={4}
            marginLeft={60}
            marginTop={60}
            page={page}
            setPage={setPage}
        >
            {page === folderPages.level_1 && (
                <ProductsListApp
                    products={products}
                    setSelectedProduct={setSelectedProduct}
                    setPage={setPage}
                />
            )}
            {page === folderPages.level_2 && (
                <ProductDetailsApp product={selectedProduct} />
            )}
        </FolderApp>
    );
};
export default StoreApp;
