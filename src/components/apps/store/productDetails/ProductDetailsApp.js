import Markdown from 'markdown-to-jsx';
import { CarouselProvider } from 'pure-react-carousel';
import React, { useEffect, useState } from 'react';

import { useFirebaseContext, useNotificationsContext } from 'contexts';
import CarouselApp from './carousel/CarouselApp';
import ProductHighlightsApp from './productHighlights/ProductHighlightsApp';
import ReviewsListApp from './reviewsList/ReviewsListApp';
import { Container } from './style';

const ProductDetailsApp = ({ product }) => {
    // Using empty string to prevent the carousel from shifting size
    // after images loading from the database
    const [images, setImages] = useState(['']);
    const [description, setDescription] = useState('');
    const { storage } = useFirebaseContext();
    const { showError, showWarning } = useNotificationsContext();

    useEffect(() => {
        let isCanceled = false;

        const getImages = async () => {
            try {
                const productImagesListRef = await storage
                    .ref(`store/${product.id}/images`)
                    .list({ maxResults: 10 });

                const promisesArray = productImagesListRef.items.map(
                    async (item) => {
                        return storage
                            .ref(`store/${product.id}/images/${item.name}`)
                            .getDownloadURL();
                    }
                );

                const settledImages = await Promise.allSettled(promisesArray);

                settledImages
                    .filter((item) => item.status === 'rejected')
                    .map((err) =>
                        showError(
                            'Error',
                            `Failed to get image from the database! ${err.reason?.message}`,
                            500
                        )
                    );

                const dbImages = settledImages
                    .filter((item) => item.status === 'fulfilled')
                    .map((item) => item.value);

                if (!isCanceled) {
                    dbImages.length === 0 && setImages(['none']);
                    dbImages.length !== 0 && setImages(dbImages);
                } else {
                    showWarning(
                        'Request Canceled',
                        'Seems like you canceled the request!',
                        418
                    );
                }
            } catch (err) {
                showError(
                    'Error',
                    'Failed to get product images from the database!',
                    500
                );
            }
        };

        getImages();
        return () => {
            isCanceled = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let isCanceled = false;

        const getProductDescription = async () => {
            try {
                const productDescriptionListRef = await storage
                    .ref(`store/${product.id}/description`)
                    .list({ maxResults: 1 });

                const firstFileName = await productDescriptionListRef.items[0]
                    .name;

                const urlPromise = await storage
                    .ref(`store/${product.id}/description/${firstFileName}`)
                    .getDownloadURL();

                const url = await urlPromise;
                const data = await fetch(url);
                const response = await data.text();

                if (!isCanceled) {
                    setDescription(response);
                } else {
                    showWarning(
                        'Request Canceled',
                        'Seems like you canceled the request!',
                        418
                    );
                }
            } catch (err) {
                showError(
                    'Error',
                    `Failed to get product description for "${product.title}" from the database!`,
                    500
                );
            }
        };

        getProductDescription();
        return () => {
            isCanceled = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <div className='carousel-container'>
                <CarouselProvider
                    naturalSlideWidth={16}
                    naturalSlideHeight={9}
                    totalSlides={images.length}
                    hasMasterSpinner
                    dragEnabled={false}
                >
                    <CarouselApp images={images} />
                </CarouselProvider>
                <ProductHighlightsApp product={product} />
            </div>

            <Markdown className='description' options={{ forceBlock: true }}>
                {description}
            </Markdown>

            <ReviewsListApp product={product} />
        </Container>
    );
};

export default ProductDetailsApp;
