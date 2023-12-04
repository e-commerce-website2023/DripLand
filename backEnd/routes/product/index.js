


const express = require("express");
const router = express.Router();

const productController = require('../../controllers/productController')
const reviewController = require('../../controllers/reviewController')
const {   addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    searchProducts,
    addTestProducts, 
    getProductReviews,
    getProductsByUser,
    } = require('../../controllers/productController');

const {
    addReview,
    getAllReviews
}= require('../../controllers/reviewController')
// use routers
router.post('/addProduct', productController.addProduct);

//Product
router.get('/allProducts', productController.getAllProducts)
router.get('/search/:searchTerm', productController.searchProducts )
router.get('/published', productController.getPublishedProduct)


// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)

//get seller products  //
router.get('/getProductsByUser/:userId', productController.getProductsByUser);



// Products router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)






module.exports = router;