




// import React from 'react';
// import { Card as MuiCard, CardContent, CardActions, Button, Typography } from '@mui/material';

// const Card = ({ product }) => {
//   return (
//     <MuiCard  sx={{
//       maxWidth: '30%', // Set to one-third of the container width
//       borderRadius: 1.5,
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       margin: '10px',
//       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     }}>
//       <CardContent>
        
        
//       <img
//   src={product.image}
//   alt={product.title}
//   style={{
//     display: 'block',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     maxWidth: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     borderRadius: 8,
//     marginBottom: 1,
    
//   }}
// />
//           <Typography variant="h1" component="div" sx={{marginTop: 2, marginBottom: 1, color: '#fff',fontSize: 16, fontWeight: 'bold', marginBottom: 1 }}>
//           {product.title}
//         </Typography>
      
//           <Typography variant="body1" component="div" sx={{ fontSize: 11,color: '#fff9',  marginBottom: 1 }}>
//           {product.description}
//         </Typography>
//         <Typography variant="body1" sx={{ fontSize: 16,fontWeight:'bold',color: '#ffff', marginBottom: 1 }}>
//           Price: {product.price} DT
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <Button
//   variant="contained"
//   sx={{
//     backgroundColor: '#f50057',
//     color: '#fff',
//     borderRadius: 4,
//     marginRight: 1,
//     height: 40, // Adjust the height to your preference
//     fontSize: 14, // Adjust the font size to your preference
//   }}
// >
//   Like
// </Button>

// <Button
//   variant="contained"
//   sx={{
//     background: 'linear-gradient(to right, #B75CFF 0%, #671AE4 100%)',
//     color: '#fff',
//     borderRadius: 4,
//     cursor: 'pointer',
//     height: 60, // Adjust the height to make it taller
//     fontSize: 16, // Adjust the font size to your preference
//   }}
// >
//   Buy Now
// </Button>
//       </CardActions>
//     </MuiCard>
//   );
// };

// export default Card;


// import React, {useState} from 'react';
// import { Card as MuiCard, CardContent, CardActions, Button, Typography } from '@mui/material';

// import { Link, useNavigate } from 'react-router-dom';

// const Card = ({ product, setProducttoview}) => {
//   const navigate = useNavigate();

//   const handlesetProduct= ()=>{
    

//     navigate(`/Productdetail/${product.id}`);
//   }

  
//   return (
    
//     <MuiCard
//       sx={{
//         maxWidth: '30%',
//         borderRadius: 1.5,
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         margin: '10px',
//         backgroundColor: 'rgba(255, 255, 255, 0.1)',
//       }}
//     >
//       <CardContent>
//       <Link to={`/Productdetail/${product.id}`} style={{ textDecoration: 'none' }}>
//         <img
//           src={product.image}
//           alt={product.title}
//           onClick={handlesetProduct}
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
//                 </Link>

//         <Typography variant="h1" component="div" sx={{ marginTop: 2, marginBottom: 1, color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 1 }}>
//           {product.title}
//         </Typography>
//         <Typography variant="body1" component="div" sx={{ fontSize: 11, color: '#fff9', marginBottom: 1 }}>
//           {product.description}
//         </Typography>
//         <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 'bold', color: '#ffff', marginBottom: 1 }}>
//           Price: {product.price} DT
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: '#f50057',
//             color: '#fff',
//             borderRadius: 4,
//             marginRight: 1,
//             height: 40,
//             fontSize: 14,
//           }}
//         >
//           Like
//         </Button>
//         <Button
//           variant="contained"
//           sx={{
//             background: 'linear-gradient(to right, #B75CFF 0%, #671AE4 100%)',
//             color: '#fff',
//             borderRadius: 4,
//             cursor: 'pointer',
//             height: 60,
//             fontSize: 16,
//           }}
//         >
//           Buy Now
//         </Button>
//       </CardActions>
//     </MuiCard>
//   );
// };

// export default Card;


import React from 'react';
import { Card as MuiCard, CardContent, CardActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <MuiCard
      sx={{
        maxWidth: '30%',
        borderRadius: 1.5,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        cursor: 'pointer', // Add cursor pointer for better UX
      }}
    >
      <CardContent>
        <div onClick={handleCardClick}>
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
        </div>

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
  );
};

export default Card;
