import React from 'react';
import { Container } from './style';
import FolderApp from '../../folder/FolderApp';
import ProductApp from './ProductApp';
import uuid from 'uuid';

const store = [
    {
        id: uuid.v4(),
        title: 'some title',
        image: 'https://via.placeholder.com/240',
        price: 49.99,
        discount: 24.99,
        averageRating: 4.5,
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dicta laudantium impedit architecto blanditiis pariatur vitae quae sed nostrum similique?',
        reviews: [
            {
                id: uuid.v4(),
                userDisplayName: 'Arnold Shisad',
                rating: 4,
                date:
                    'Wed Jan 22 2020 16:36:50 GMT+0200 (Eastern European Standard Time)',
                content: 'something here'
            },
            {
                id: uuid.v4(),
                userDisplayName: 'Muhsfgo Shsigtyad',
                rating: 5,
                date:
                    'Wed Jan 20 2020 05:36:50 GMT+0200 (Eastern European Standard Time)',
                content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.'
            },
            {
                id: uuid.v4(),
                userDisplayName: 'Arnold Shisad',
                rating: 4,
                date:
                    'Wed Jan 22 2020 16:36:50 GMT+0200 (Eastern European Standard Time)',
                content: 'something here'
            },
            {
                id: uuid.v4(),
                userDisplayName: 'Muhsfgo Shsigtyad',
                rating: 5,
                date:
                    'Wed Jan 20 2020 05:36:50 GMT+0200 (Eastern European Standard Time)',
                content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.'
            },
            {
                id: uuid.v4(),
                userDisplayName: 'Arnold Shisad',
                rating: 4,
                date:
                    'Wed Jan 22 2020 16:36:50 GMT+0200 (Eastern European Standard Time)',
                content: 'something here'
            },
            {
                id: uuid.v4(),
                userDisplayName: 'Muhsfgo Shsigtyad',
                rating: 5,
                date:
                    'Wed Jan 20 2020 05:36:50 GMT+0200 (Eastern European Standard Time)',
                content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.'
            }
        ]
    },
    {
        id: uuid.v4(),
        title: 'some title',
        image: 'https://via.placeholder.com/240',
        price: 49.99,
        discount: 24.99,
        averageRating: 4.5,
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dicta laudantium impedit architecto blanditiis pariatur vitae quae sed nostrum similique?',
        reviews: [
            {
                id: uuid.v4(),
                userDisplayName: 'Arnold Shisad',
                rating: 4,
                date:
                    'Wed Jan 22 2020 16:36:50 GMT+0200 (Eastern European Standard Time)',
                content: 'something here'
            },
            {
                id: uuid.v4(),
                userDisplayName: 'Muhsfgo Shsigtyad',
                rating: 5,
                date:
                    'Wed Jan 20 2020 05:36:50 GMT+0200 (Eastern European Standard Time)',
                content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.'
            }
        ]
    }
];

const renderProducts = () => {
    return store.map(product => (
        <ProductApp key={product.id} product={product} />
    ));
};

const StoreApp = () => {
    return (
        <FolderApp appId={4} marginLeft='4rem' marginTop='4rem'>
            <Container>{renderProducts()}</Container>
        </FolderApp>
    );
};
export default StoreApp;
