import Markdown from 'markdown-to-jsx';
import React, { useEffect, useRef, useState } from 'react';

import { useFirebaseContext } from '../../../../contexts/firebaseContext';
import { useNotificationsContext } from '../../../../contexts/notificationsContext';

const ProductDetailsApp = ({ product }) => {
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState('');
    const { storage } = useFirebaseContext();
    const { showError } = useNotificationsContext();
    const getImages = useRef(null);
    const getProductDescription = useRef(null);

    getImages.current = async () => {
        try {
            const storeRef = await storage.ref('store');
            const productRef = await storeRef.child(product.id);
            const productImagesRef = await productRef.child('images');
            const productImagesList = await productImagesRef.listAll();

            const promisesArray = productImagesList.items.map(async (item) => {
                return productImagesRef.child(item.name).getDownloadURL();
            });

            const settledImages = await Promise.allSettled(promisesArray);

            settledImages
                .filter((item) => item.status === 'rejected')
                .map((err) => {
                    showError(
                        'Error',
                        `Failed to get image from database! ${err.reason?.message}`,
                        500
                    );
                });

            const dbImages = settledImages
                .filter((item) => item.status === 'fulfilled')
                .map((item) => item.value);

            setImages(dbImages);
        } catch (err) {
            showError(
                'Error',
                'Failed to get product images from database!',
                500
            );
        }
    };

    getProductDescription.current = async () => {
        try {
            const storeRef = await storage.ref('store');
            const productRef = await storeRef.child(product.id);
            const productDescriptionRef = await productRef.child('description');
            const productDescriptionList = await productDescriptionRef.list({
                maxResults: 1,
            });

            const firstFileName = await productDescriptionList.items[0].name;
            const urlPromise = await productDescriptionRef
                .child(firstFileName)
                .getDownloadURL();

            const url = await urlPromise;
            const data = await fetch(url);
            const response = await data.text();

            setDescription(response);
        } catch (err) {
            showError(
                'Error',
                'Failed to get product description from database!',
                500
            );
        }
    };

    useEffect(() => {
        getImages.current();
        getProductDescription.current();
    }, []);

    return (
        <div>
            <h3>{product.title}</h3>
            <Markdown options={{ forceBlock: true }}>{description}</Markdown>
        </div>
    );
};

export default ProductDetailsApp;
