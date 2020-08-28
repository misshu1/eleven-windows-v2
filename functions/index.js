const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();
const firestore = admin.firestore();

exports.addProductReview = functions.firestore
    .document('reviews/{reviewId}')
    .onCreate(async (snapshot, context) => {
        const review = snapshot.data();

        // The 'reviews' object will be added to product after posting a review
        let reviews = null;

        const productRef = firestore.doc(`products/${review.productId}`);
        let productData = null;

        await productRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    return (productData = doc.data());
                } else {
                    return console.log('No such document!');
                }
            })
            .catch((error) => {
                return console.log('Error getting document:', error);
            });

        if (productData.reviews) {
            reviews = {
                total: productData.reviews.total + 1,
                last5: [review, ...productData.reviews.last5.splice(0, 4)],
                ratings: [
                    { userId: review.userId, rating: review.rating },
                    ...productData.reviews.ratings,
                ],
            };
        } else {
            // When posting the first revew
            // Product doesn't have the 'reviews' object, yet
            reviews = {
                total: 1,
                last5: [review],
                ratings: [{ userId: review.userId, rating: review.rating }],
            };
        }

        productRef.set({ reviews }, { merge: true });
    });
