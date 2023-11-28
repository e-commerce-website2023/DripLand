
const ErrorResponse = require('../utils/errorResponse');

const db = require('../models/index.js'); 
const Product = db.models.products;

const addProduct = async (req, res) => {
    try {
      const {
        image,
        title,
        size,
        categories,
        price,
        description,
      } = req.body;
console.log(req.body)

      const newProduct = await Product.create({
        image,
        title,
        size,
        categories,
        price,
        description,
      });
      res.json({ message: "created new product", newProduct });
      //res.json(newProduct);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

// 2. get all products

const getAllProducts = async (req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)

}

// 3. get single product


const getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.findOne({ where: { id: id }})
    res.status(200).send(product)

}



// 4. update Product

const updateProduct = async (req, res) => {

    let id = req.params.id

    const product = await Product.update(req.body, { where: { id: id }})

    res.status(200).send(product)
   

}


// 5. delete product by id

const deleteProduct = async (req, res) => {

    let id = req.params.id
    
    await Product.destroy({ where: { id: id }} )

    res.status(200).send('Product is deleted !')

}



// 6. get published product

const getPublishedProduct = async (req, res) => {

    const products =  await Product.findAll({ where: { published: true }})

    res.status(200).send(products)

}







module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
   
    
}