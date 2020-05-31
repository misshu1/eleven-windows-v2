import React, { useCallback, useEffect, useState } from 'react';

import { useFirebaseContext } from '../../../contexts/firebaseContext';
import FolderApp from '../../folder/FolderApp';
import ProductApp from './product/ProductApp';
import { Container } from './style';

// const store = [
//     {
//         id: uuid.v4(),
//         title: 'some title',
//         image: 'https://via.placeholder.com/240',
//         price: 49.99,
//         discount: 24.99,
//         averageRating: 4.5,
//         description:
//             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dicta laudantium impedit architecto blanditiis pariatur vitae quae sed nostrum similique?',
//         reviews: [
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Arnold Shisad',
//                 rating: 4,
//                 date: firebase.getFirebaseTimestamp(),
//                 content: 'something here',
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Muhsfgo Shsigtyad',
//                 rating: 5,
//                 date: firebase.getFirebaseTimestamp(),
//                 content:
//                     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.',
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Arnold Shisad',
//                 rating: 4,
//                 date: firebase.getFirebaseTimestamp(),
//                 content: 'something here',
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Muhsfgo Shsigtyad',
//                 rating: 5,
//                 date: firebase.getFirebaseTimestamp(),
//                 content:
//                     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.',
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Arnold Shisad',
//                 rating: 4,
//                 date: firebase.getFirebaseTimestamp(),
//                 content: 'something here',
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Muhsfgo Shsigtyad',
//                 rating: 5,
//                 date: firebase.getFirebaseTimestamp(),
//                 content:
//                     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.',
//             },
//         ],
//     },
//     {
//         id: uuid.v4(),
//         title: 'some title',
//         image: 'https://via.placeholder.com/240',
//         price: 49.99,
//         discount: 24.99,
//         averageRating: 4.5,
//         description:
//             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dicta laudantium impedit architecto blanditiis pariatur vitae quae sed nostrum similique?',
//         reviews: [
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Arnold Shisad',
//                 rating: 4,
//                 date: firebase.getFirebaseTimestamp(),
//                 content: 'something here',
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Muhsfgo Shsigtyad',
//                 rating: 5,
//                 date: firebase.getFirebaseTimestamp(),
//                 content:
//                     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.',
//             },
//         ],
//     },
// ];

const StoreApp = () => {
    const { firestore } = useFirebaseContext();
    const [products, setProducts] = useState([]);

    // const getProducts = useCallback(async () => {
    //     const test = await firestore
    //         .collection('store')
    //         .get()
    //         .then((data) => console.log(data.data()));
    // }, [firestore]);

    const getProducts = useCallback(async () => {
        let dbProducts = [];
        try {
            const productsRef = await firestore.collection('products').get();
            await productsRef.forEach(
                (doc) =>
                    (dbProducts = [
                        ...dbProducts,
                        { id: doc.id, ...doc.data() },
                    ])
            );
        } catch (err) {
            // TODO add custom notification alert
            console.log(err);
        }
        setProducts(dbProducts);
    }, [firestore]);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

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
