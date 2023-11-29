
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch all products or filtered products based on the search term
//     const fetchProducts = async () => {
//       try {
//         // Fetch all products or filtered products based on the search term
//         const url = searchTerm
//           ? `http://localhost:8001/api/products/search/${searchTerm}`
//           : 'http://localhost:8001/api/products/allProducts';

//         const response = await axios.get(url);
//         console.log(response.data)
//         setProducts(response.data);
        
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [searchTerm]); // Re-fetch products when the search term changes


  
//   return (
//     <div>
//       <h1>All Products</h1>
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <p>Title: {product.title}</p>
//             <p>Price: {product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AllProducts;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post'

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch all products or filtered products based on the search term
    const fetchProducts = async () => {
      try {
        // Fetch all products or filtered products based on the search term
        const url = searchTerm
          ? `http://localhost:8001/api/products/search/${searchTerm}`
          : 'http://localhost:8001/api/products/allProducts';

        const response = await axios.get(url);
        console.log(response.data)
        setProducts(response.data);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [searchTerm]); // Re-fetch products when the search term changes


  
  return (
    <div>
      <h1>All Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {products.map((product) => (
          <Post product={product}/>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
