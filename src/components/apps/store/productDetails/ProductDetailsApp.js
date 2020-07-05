import React, { useEffect, useRef, useState } from 'react';

import { useFirebaseContext } from '../../../../contexts/firebaseContext';
import { useNotificationsContext } from '../../../../contexts/notificationsContext';

const ProductDetailsApp = ({ product }) => {
    const [images, setImages] = useState([]);
    const { storage } = useFirebaseContext();
    const { showError } = useNotificationsContext();
    const getImages = useRef(null);

    getImages.current = async () => {
        try {
            const storeRef = await storage.ref('store');
            const productRef = await storeRef.child(product.id);
            const productImagesRef = await productRef.listAll();

            const promisesArray = productImagesRef.items.map(async (item) => {
                return productRef.child(item.name).getDownloadURL();
            });

            const settledImages = await Promise.allSettled(promisesArray);

            settledImages
                .filter((item) => item.status === 'rejected')
                .map((err) =>
                    showError(
                        'Error',
                        `Failed to get image from database! ${err.reason}`,
                        500
                    )
                );

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

    useEffect(() => {
        getImages.current();
    }, []);

    return (
        <div>
            <h3>{product.title}</h3>
            <p>This section its not done, yet</p>
            {/* Need to be added in firebase */}
            {/* {product.images} */}
            {/* {product.newPrice} */}
            {/* {product.oldPrice} */}
            {/* {product.description} */}
            {/* {product.description['list 2']?.map((item) => {
                console.log(item);
            })} */}
        </div>
    );
};

export default ProductDetailsApp;
