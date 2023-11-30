// import React from 'react'

// const Card = ({product}) => {
//   return (
//     <div>
//         <li key={product.id}>
//             <p>Title: {product.title}</p>
//             <p>Price: {product.price}</p>
//             <img src={product.image} alt={product.title} style={{ maxWidth: '100%' }} />
//             <p> {product.price}</p>
//             <p>Like</p>
//           <button>Buy Now</button>
//           </li>
//     </div>
//   )
// }

// export default Card

///////////////////////////



// import React from 'react';

// const Card = ({ product }) => {
//   const cardStyle = {
//     maxWidth: '300px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     margin: '16px',
//     padding: '16px',
//     boxSizing: 'border-box',
//   };

//   const imageStyle = {
//     maxWidth: '100%',
//     borderRadius: '8px',
//     marginBottom: '16px',
//   };

//   const titleStyle = {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     marginBottom: '8px',
//   };

//   const priceStyle = {
//     fontSize: '16px',
//     marginBottom: '8px',
//   };

//   const likeButtonStyle = {
//     backgroundColor: '#f50057',
//     color: '#fff',
//     borderRadius: '4px',
//     padding: '8px',
//     marginRight: '8px',
//   };

//   const buyNowButtonStyle = {
//     backgroundColor: '#4caf50',
//     color: '#fff',
//     borderRadius: '4px',
//     padding: '8px',
//     cursor: 'pointer',
//   };

//   return (
//     <div style={cardStyle}>
//       <p style={titleStyle}>{product.title}</p>
//       <p style={priceStyle}>Price: ${product.price}</p>
//       <img src={product.image} alt={product.title} style={imageStyle} />
//       <p style={priceStyle}>Price: ${product.price}</p>
//       <p>Like</p>
//       <button style={likeButtonStyle}>Like</button>
//       <button style={buyNowButtonStyle}>Buy Now</button>
//     </div>
//   );
// };

// export default Card;




import React from 'react';
import { Card as MuiCard, CardContent, CardActions, Button, Typography } from '@mui/material';

const Card = ({ product }) => {
  return (
    <MuiCard  sx={{
      maxWidth: '30%', // Set to one-third of the container width
      borderRadius: 8,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      
    }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontSize: 18, fontWeight: 'bold', marginBottom: 1 }}>
          {product.title}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 16, marginBottom: 1 }}>
          Price: ${product.price}
        </Typography>
        <img src={product.image}
          alt={product.title}
          style={{
            
            maxWidth: '100%', 
            height: '200px', 
            objectFit: 'cover', 
            borderRadius: 8,
            marginBottom: 1,
            
          }} />
        <Typography variant="body1" sx={{ fontSize: 16, marginBottom: 1 }}>
          Price: ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{ backgroundColor: '#f50057', color: '#fff', borderRadius: 4, marginRight: 1 }}>
          Like
        </Button>
        <Button
  variant="contained"
  sx={{
    background: 'linear-gradient(to right, #B75CFF 0%, #671AE4 100%)',
    color: '#fff',
    borderRadius: 4,
    cursor: 'pointer',
  }}
>
  Buy Now
</Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
