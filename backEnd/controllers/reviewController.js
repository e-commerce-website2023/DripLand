// const ErrorResponse = require('../utils/errorResponse');
// const db = require('../models/index.js'); 
// const models = db.models;

// // model
// const Review = models.reviews;

// // functions

// //1. Add Review

// const addReview = async (req, res) => {
//     try {
//         const id = parseInt(req.params.id, 10)
//         console.log("this the id",id )
//         console.log('Received request to add review for product with ID:', id);
//         if (!req.body.rating || !req.body.description) {
//             return res.status(400).send({ error: 'Rating and description are required.' });
//         }
//         let data = {
//             product_id: id,
//             rating: req.body.rating,
//             description: req.body.description,
//         };

//         console.log('Creating review with data:', data);
//         const review = await Review.create(data);

//         console.log('Review created successfully:', review);
//         res.status(200).send(review);
//     } catch (error) {
//         console.error('Error adding review:', error);
//         res.status(500).send({ error: 'Internal Server Error' });
//     }
// };


// // 2. Get All Reviews

// const getAllReviews = async (req, res) => {

//     const reviews = await Review.findAll({})
//     res.status(200).send(reviews)

// }


// module.exports = {
//     addReview,
//     getAllReviews,
// }


const ErrorResponse = require('../utils/errorResponse');
const db = require('../models/index.js');

// Import your models
const models = db.models;

// model
const Review = models.reviews;
const Product = models.products;
// functions

//1. Add Review


const addReview = async (req, res) => {

    const id = req.params.id

    let data = {
        product_id: id,
        rating: req.body.rating,
        description: req.body.description
    }

    const review = await Review.create(data)
    res.status(200).send(review)

}

// 2. Get All Reviews

const getAllReviews = async (req, res) => {
    try {
        // Fetch all reviews and include associated product information
        const reviews = await Review.findAll({
            include: models.Product,
        });

        res.status(200).send(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = {
    addReview,
    getAllReviews,
};
