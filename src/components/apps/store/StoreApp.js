import React, { useCallback, useContext, useEffect, useState } from 'react';

import { FirebaseContext } from '../../../contexts/firebaseContext';
import FolderApp from '../../folder/FolderApp';
import ProductApp from './ProductApp';
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
//                 content: 'something here'
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Muhsfgo Shsigtyad',
//                 rating: 5,
//                 date: firebase.getFirebaseTimestamp(),
//                 content:
//                     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.'
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Arnold Shisad',
//                 rating: 4,
//                 date: firebase.getFirebaseTimestamp(),
//                 content: 'something here'
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Muhsfgo Shsigtyad',
//                 rating: 5,
//                 date: firebase.getFirebaseTimestamp(),
//                 content:
//                     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.'
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Arnold Shisad',
//                 rating: 4,
//                 date: firebase.getFirebaseTimestamp(),
//                 content: 'something here'
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Muhsfgo Shsigtyad',
//                 rating: 5,
//                 date: firebase.getFirebaseTimestamp(),
//                 content:
//                     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.'
//             }
//         ]
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
//                 content: 'something here'
//             },
//             {
//                 id: uuid.v4(),
//                 userDisplayName: 'Muhsfgo Shsigtyad',
//                 rating: 5,
//                 date: firebase.getFirebaseTimestamp(),
//                 content:
//                     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, deserunt.'
//             }
//         ]
//     }
// ];

const StoreApp = () => {
    const { firebase } = useContext(FirebaseContext);
    const [products, setProducts] = useState([]);

    const getProducts = useCallback(() => {
        firebase.db.collection('store').onSnapshot(handleSnapshot);
    }, [firebase.db]);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const handleSnapshot = (snapshot) => {
        const dbProducts = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        setProducts(dbProducts);
    };

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
