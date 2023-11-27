// const express = require('express');
// const router = express.Router();

// router.get('/', (request, response) => {
//     response.send('This is the home page of the posts.')
// });

// router.get('/most-popular', (request, response) => {
//     response.send('These are the most popular posts.');
// });










// module.exports = router;


const productController = require('../../controllers/productController')
const reviewController = require('../../controllers/reviewController')


// router
const router = require('express').Router()


// use routers
router.post('/addProduct', productController.addProduct)

// router.get('/allProducts', productController.getAllProducts)

// router.get('/published', productController.getPublishedProduct)



// // Review Url and Controller

// router.get('/allReviews', reviewController.getAllReviews)
// router.post('/addReview/:id', reviewController.addReview)

// // get product Reviews
// router.get('/getProductReviews/:id', productController.getProductReviews)




// // Products router
// router.get('/:id', productController.getOneProduct)

// router.put('/:id', productController.updateProduct)

// router.delete('/:id', productController.deleteProduct)

module.exports = router



