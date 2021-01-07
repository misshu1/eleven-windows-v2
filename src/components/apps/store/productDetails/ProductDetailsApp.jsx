import Markdown from 'markdown-to-jsx';
import { CarouselProvider } from 'pure-react-carousel';
import React from 'react';

import CarouselApp from './carousel/CarouselApp';
import ProductHighlightsApp from './productHighlights/ProductHighlightsApp';
import ReviewsListApp from './reviewsList/ReviewsListApp';
import { Container } from './style';

const ProductDetailsApp = ({ product }) => {
    return (
        <Container>
            <div className='carousel-container'>
                <CarouselProvider
                    naturalSlideWidth={16}
                    naturalSlideHeight={9}
                    totalSlides={product.images.length}
                    hasMasterSpinner
                    dragEnabled={false}
                >
                    <CarouselApp images={product.images} />
                </CarouselProvider>
                <ProductHighlightsApp product={product} />
            </div>

            <Markdown className='description' options={{ forceBlock: true }}>
                {product.description}
            </Markdown>

            <ReviewsListApp product={product} />
        </Container>
    );
};

export default ProductDetailsApp;
