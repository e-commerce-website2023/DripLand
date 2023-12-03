

const ErrorResponse = require('../utils/errorResponse');
const Sequelize = require('sequelize'); // Add this line

const db = require('../models/index.js'); 
const Product = db.models.products;
const Review = db.models.reviews;

const addProduct = async (req, res) => {
    try {
      const {
        image,
        title,
        size,
        categories,
        price,
        description,
        stock,
        brand,
      } = req.body;
console.log(req.body)

      const newProduct = await Product.create({
        image,
        title,
        size,
        categories,
        price,
        description,
        stock,
        brand,
      });
      res.json({ message: "created new product", newProduct });
      //res.json(newProduct);
    } catch (error) {
      console.error('Error creating new product:', error);
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
const searchProducts = async (req, res) => {
  try {
    const searchTerm = req.params.searchTerm;
      const products = await Product.findAll({
          where: {
              title: {
                [Sequelize.Op.iLike]: sequelize.literal(`'%${searchTerm}%'`)
                
              },
          },
      });

      res.status(200).json(products);
  } catch (error) {
    console.error('Error in searchProducts:', error);
    res.status(500).send('Internal Server Error');  }
};



// // 7. connect one to many relation Product and Reviews

// const getProductReviews =  async (req, res) => {

//   const id = req.params.id

//   const data = await Product.findOne({
//       include: [{
//           model: Review,
//           as: 'reviews'
//       }],
//       where: { id: id }
//   })
//   res.status(200).send(data)

// }
// 7. connect one to many relation Product and Reviews
// const getProductReviews = async (req, res) => {
//   try {
//     const id = req.params.id;

//     // Use the correct association name 'reviews' instead of 'review'
//     const data = await Product.findOne({
//       include: [{
//         model: Review,
//         as: 'reviews'
//       }],
//       where: { id: id }
//     });

//     res.status(200).send(data);
//   } catch (error) {
//     console.error('Error in getProductReviews:', error);
//     res.status(500).send('Internal Server Error');
//   }
// };
const getProductReviews = async (req, res) => {
  try {
    const id = req.params.id;

    // Use the correct association name 'reviews' instead of 'review'
    const data = await Product.findOne({
      include: [{
        model: Review,
        as: 'reviews'
      }],
      where: { id: id }
    });

    res.status(200).send(data);
  } catch (error) {
    console.error('Error in getProductReviews:', error);
    res.status(500).send('Internal Server Error');
  }
};


//testing
const addTestProducts = async (req, res) => {
  try {
      // Assuming your Product model has the necessary fields (image, title, price, etc.)
      const testProducts = [
          { title: 'Test Product 1', price: 19.99, description: 'Lorem ipsum...' },
          { title: 'Test Product 2', price: 29.99, description: 'Lorem ipsum...' },
          // Add more test products as needed
      ];

      // Bulk create test products
      await Product.bulkCreate(testProducts);

      res.status(201).json({ message: 'Test products added successfully' });
  } catch (error) {
      res.status(500).send(error.message);
  }
};





module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
  searchProducts,
  addTestProducts, 
  getProductReviews,
};
