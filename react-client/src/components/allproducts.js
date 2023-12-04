


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from './Card';

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const url = searchTerm
//           ? `http://localhost:8001/api/products/search/${searchTerm}`
//           : 'http://localhost:8001/api/products/allProducts';
// caches.log(searchTerm)
//         const response = await axios.get(url);
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [searchTerm]);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         margin: '80px 0 0 0', // Adjust margin as needed
        
//       }}
//     >
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//         <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           maxWidth: '875px',
//           height: '834px',
          
//           top: '319.21px',
//           left: '503.99px',
         
         
//         }}
//       >
//         {products.map((product) => (
//           <Card key={product.id} product={product} style={{ flex: '0 0 30%', margin: '10px' }} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProducts;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProducts = async () => {
    try {
      const url = searchTerm
        ? `http://localhost:8001/api/products/search/${searchTerm}`
        : 'http://localhost:8001/api/products/allProducts';
        console.log('Fetching products from:', url);

      const response = await axios.get(url);
      console.log('Response data:', response.data);

      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);

  const handleSearch = () => {
    fetchProducts();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        margin: '80px 0 0 0',
      }}
    >
     
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '875px',
          height: '834px',
        }}
      >
        {products.map((product) => (
          <Card key={product.id} product={product} style={{ flex: '0 0 30%', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
