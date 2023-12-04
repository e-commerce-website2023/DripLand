// import React,{useState,useEffect} from 'react'
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Card as MuiCard, CardContent, CardActions, Button, Typography } from '@mui/material';

// const Productdetail = () => {
//   const navigate = useNavigate();
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8001/api/products/${productId}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>; // You can add a loading state if needed
//   }


//   //reveiw section

//     // review rating  description
   


    


//   return (
//     <div style={{ display: 'flex' }}>

//     <MuiCard
//     sx={{
//       maxWidth: '100%', // Adjust the maximum width as needed (e.g., 80% of the container)
//     width: '100%',   // Make the card take 100% of its container width
//     borderRadius: 1.5,
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     margin: '100px',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     cursor: 'pointer', // Add cursor pointer for better UX
//     }}
//   >
//     <CardContent>
     
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{
//             display: 'block',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//             maxWidth: '100%',
//             height: '200px',
//             objectFit: 'cover',
//             borderRadius: 8,
//             marginBottom: 1,
//           }}
//         />
      

//       <Typography variant="h1" component="div" sx={{ marginTop: 2, marginBottom: 1, color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 1 }}>
//         {product.title}
//       </Typography>
//       <Typography variant="body1" component="div" sx={{ fontSize: 11, color: '#fff9', marginBottom: 1 }}>
//         {product.description}
//       </Typography>
//       <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 'bold', color: '#ffff', marginBottom: 1 }}>
//         Price: {product.price} DT
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: '#f50057',
//           color: '#fff',
//           borderRadius: 4,
//           marginRight: 1,
//           height: 40,
//           fontSize: 14,
//         }}
//       >
//         Like
//       </Button>
//       <Button
//         variant="contained"
//         sx={{
//           background: 'linear-gradient(to right, #B75CFF 0%, #671AE4 100%)',
//           color: '#fff',
//           borderRadius: 4,
//           cursor: 'pointer',
//           height: 60,
//           fontSize: 16,
//         }}
//       >
//         Buy Now
//       </Button>
//     </CardActions>
//   </MuiCard>
    
//   <div style={{ marginLeft: '20px', flex: 1 }}>
//        <h1>Review</h1> 
//       </div>
// </div>
//   )
// }

// export default Productdetail

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Card as MuiCard, CardContent, CardActions, Button, Typography } from '@mui/material';
import ReviewForm from './ReviewForm.js.js';
const Productdetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const fetchReviews = async () => {
    try {
      const reviewsResponse = await axios.get(`http://localhost:8001/api/products/getProductReviews/${productId}`);
      console.log('Review Response:', reviewsResponse.data);
      setReviews(reviewsResponse.data.reviews); // Assuming the response contains a 'reviews' property
    } catch (error) {
      console.error('Error fetching product reviews:', error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/api/products/${productId}`);
        setProduct(response.data);

        // Fetch reviews for the product
        const reviewsResponse = await axios.get(`http://localhost:8001/api/products/getProductReviews/${productId}`);
        setReviews(reviewsResponse.data.review); // Assuming the response contains a 'review' property
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; // You can add a loading state if needed
  }

  return (
    <div style={{ display: 'flex' }}>
      <MuiCard
        sx={{
          maxWidth: '100%', // Adjust the maximum width as needed (e.g., 80% of the container)
          width: '100%', // Make the card take 100% of its container width
          borderRadius: 1.5,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          margin: '100px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          cursor: 'pointer', // Add cursor pointer for better UX
        }}
      >
        <CardContent>
          <img
            src={product.image}
            alt={product.title}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: 8,
              marginBottom: 1,
            }}
          />

          <Typography variant="h1" component="div" sx={{ marginTop: 2, marginBottom: 1, color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 1 }}>
            {product.title}
          </Typography>
          <Typography variant="body1" component="div" sx={{ fontSize: 11, color: '#fff9', marginBottom: 1 }}>
            {product.description}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 'bold', color: '#ffff', marginBottom: 1 }}>
            Price: {product.price} DT
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#f50057',
              color: '#fff',
              borderRadius: 4,
              marginRight: 1,
              height: 40,
              fontSize: 14,
            }}
          >
            Like
          </Button>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #B75CFF 0%, #671AE4 100%)',
              color: '#fff',
              borderRadius: 4,
              cursor: 'pointer',
              height: 60,
              fontSize: 16,
            }}
          >
            Buy Now
          </Button>
        </CardActions>
      </MuiCard>

      <div style={{ marginLeft: '20px', flex: 1, textAlign: 'center' }}>
      <h5 style={{ color: '#6C5DD3' }}>Give us your feedback</h5>        <ReviewForm productId={productId} />
        {/* Display existing reviews here if needed */}
      </div>
    </div>
  );
};

export default Productdetail;
