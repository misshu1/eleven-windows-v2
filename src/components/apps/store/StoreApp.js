import React, { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';

import { useFirebaseContext } from '../../../contexts/firebaseContext';
import { useNotificationsContext } from '../../../contexts/notificationsContext';
import FolderApp from '../../folder/FolderApp';
import ProductApp from './product/ProductApp';
import { Container } from './style';

const StoreApp = () => {
    const { firestore } = useFirebaseContext();
    const [products, setProducts] = useState([]);
    const { showError } = useNotificationsContext();
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

    const renderProducts = useCallback(() => {
        return products.map((product) => (
            <ProductApp key={product.id} product={product} />
        ));
    }, [products]);

    return (
        <FolderApp appId={4} marginLeft='4rem' marginTop='4rem'>
            <Container>{renderProducts()}</Container>
        </FolderApp>
    );
};
export default StoreApp;
