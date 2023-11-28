// const express = require('express');
// const router = express.Router();

// router.get('/', (request, response) => {
//     response.send('This is the home page of the posts.')
// });

// router.get('/most-popular', (request, response) => {
//     response.send('These are the most popular posts.');
// });

// module.exports = router;


const express = require("express");
const router = express.Router();

const productController = require('../../controllers/productController')
const reviewController = require('../../controllers/reviewController')
const { addProduct,getAllProducts,getPublishedProduct } = require('../../controllers/productController');


// use routers
router.post('/addProduct', productController.addProduct)
// router.post('/addProduct', isAuthenticated, isSeller, productController.addProduct);


router.get('/allProducts', productController.getAllProducts)

router.get('/published', productController.getPublishedProduct)





module.exports = router;