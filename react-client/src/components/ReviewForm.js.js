


// // ReviewForm.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ReviewForm = ({ productId }) => {
//   const [rating, setRating] = useState('');
//   const [description, setDescription] = useState('');
//   const [reviews, setReviews] = useState([]);
//   const [allreviews,setAllreview]=useState([]);

//   // useEffect(() => {
//   //   // Fetch reviews for the product
//   //   const fetchReviews = async () => {
//   //     try {
//   //       const reviewsResponse = await axios.get(`http://localhost:8001/api/products/getProductReviews/${productId}`);
//   //       setReviews(reviewsResponse.data.reviews); // Assuming the response contains a 'review' property
//   //       console.log(reviewsResponse.data.review,reviews)
//   //     } catch (error) {
       
//   //       console.error('Error fetching product reviews:', error);
//   //     }
//   //   };

//   //   fetchReviews();
//   // }, [productId]);

//   useEffect(() => {
//     // Fetch reviews for the product
//     const fetchReviews = async () => {
//       try {
//         console.log('try')
//         const reviewsResponse = await axios.get(`http://localhost:8001/api/products/getProductReviews/${productId}`);
//         console.log('Reviews data',reviewsResponse.data.review)
//         setReviews(reviewsResponse.data); // Assuming the response contains a 'review' property
       
//       } catch (error) {
        
//         console.error('Error fetching product reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, [productId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Replace with your actual API endpoint for adding reviews
//       const apiUrl = `http://localhost:8001/api/products/addReview/${productId}`;

//       const response = await axios.post(apiUrl, {
//         product_id: productId, 
//         rating: parseInt(rating),
//         description,
//       });


//       // You can perform additional actions here if needed

//       // Clear form fields after successful submission
//       setRating('');
//       setDescription('');

//       // Update reviews state to include the newly added review
//       setReviews([...reviews, response.data]);
//     } catch (error) {
//       console.error('Error adding review:', error);
//       // Handle errors appropriately
//     }
//   };

//   return (
//     <div>
     

//       <form onSubmit={handleSubmit}>
//         <label>
//           Rating:
//           <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Submit Review</button>
//       </form>
//       <h2>Product Reviews:</h2>
//       <ul>
//         {reviews.map((review) => (
//           <li key={review.id}>
//             <strong>Rating:</strong> {review.rating}, <strong>Description:</strong> {review.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReviewForm;
// ReviewForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const ReviewForm = ({ productId }) => {
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews for the product
    const fetchReviews = async () => {
      try {
        const reviewsResponse = await axios.get(`http://localhost:8001/api/products/getProductReviews/${productId}`);
        setReviews(reviewsResponse.data); // Assuming the response contains a 'review' property
      } catch (error) {
        console.error('Error fetching product reviews:', error);
      }
    };

    fetchReviews();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your actual API endpoint for adding reviews
      const apiUrl = `http://localhost:8001/api/products/addReview/${productId}`;

      const response = await axios.post(apiUrl, {
        product_id: productId,
        rating: parseInt(rating),
        description,
      });

      // Clear form fields after successful submission
      setRating('');
      setDescription('');

      // Update reviews state to include the newly added review
      setReviews([...reviews, response.data]);
    } catch (error) {
      console.error('Error adding review:', error);
      // Handle errors appropriately
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        <span style={{ color: 'black',fontSize: '19px' }}>Rating:</span>
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      </label>
      <br />
      <label>
        <span style={{ color: 'black',fontSize: '19px' }}>Description:</span>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <Button
        type="submit"
        sx={{
          backgroundColor: '#f50057',
          color: '#fff',
          borderRadius: 4,
          marginRight: 1,
          height: 40,
          fontSize: 12,
          
        }}
      >
        Submit Review
      </Button>
    </form>
    <h5 style={{ color: '#6C5DD3' }}>All Product Reviews:</h5>
    <ul>
  {reviews.map((review) => (
    <li key={review.id} style={{ color: 'white',fontSize: '15px' }}>
      <strong style={{ color: '#f50057' }}>Rating:</strong> {review.rating},{' '}
      <strong style={{ color: '#f50057' }}>Comment:</strong> {review.description}
    </li>
  ))}
</ul>
  </div>
  );
};

export default ReviewForm;
