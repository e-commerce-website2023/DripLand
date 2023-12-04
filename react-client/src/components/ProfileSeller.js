


// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';

// const ProfileSeller = ({ userData }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedDescription, setEditedDescription] = useState(userData.description || '');
//   const [newPost, setNewPost] = useState({
//     image: '',
//     title: '',
//     size: '',
//     categories: '',
//     price: '',
//     description: '',
//     stock: '',
//     brand: '',
//     userId: userData.id,
//   });

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     console.log('Edited Description:', editedDescription);
//     setIsEditing(false);
//   };

//   const handlePostClick = async () => {
//     console.log('New Post:', newPost);

//     try {
//       const response = await fetch('http://localhost:8001/api/products/addProduct', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...newPost,
//           userId: userData.id, // Include the user ID in the request body
//         }),
//       });

//       if (response.ok) {
//         console.log('Product created successfully');
//         // Add logic to update your product list or take any other action as needed
//       } else {
//         console.error('Failed to create product');
//       }
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
//   };

//   // Dummy data for testing products display
//   const dummyProducts = ['Product 1', 'Product 2', 'Product 3'];

//   return (
//     <div>
//       <div>{userData.id}</div>
//       {/* Profile Section */}
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <div
//           style={{
//             width: '150px',
//             height: '150px',
//             borderRadius: '50%',
//             overflow: 'hidden',
//             margin: '0 auto',
//           }}
//         >
//           <img
//             src={userData.image}
//             alt="Profile"
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </div>
//         <p style={{ marginTop: '10px', fontSize: '1.5rem', fontWeight: 'bold' }}>
//           {userData.name}
//         </p>
//         {isEditing ? (
//           <div style={{ margin: '10px 0' }}>
//             <input
//               type="text"
//               value={editedDescription}
//               onChange={(e) => setEditedDescription(e.target.value)}
//             />
//             <Button
//               variant="contained"
//               style={{ backgroundColor: '#6C5DD3', color: '#FFFFFF', marginRight: '10px' }}
//               onClick={handleSaveClick}
//             >
//               Save
//             </Button>
//           </div>
//         ) : (
//           <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <p style={{ fontSize: '1rem', color: 'white', marginRight: '10px' }}>
//               {editedDescription || 'Welcome to my profile'}
//             </p>
//             <Button
//               variant="contained"
//               style={{ backgroundColor: '#6C5DD3', color: '#FFFFFF' }}
//               onClick={handleEditClick}
//             >
//               Edit
//             </Button>
//           </div>
//         )}
//       </div>

//       {/* Create New Post Section */}
//       <Box
//         sx={{
//           backgroundColor: 'white',
//           padding: '20px',
//           borderRadius: '8px',
//           boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//           display: 'flex',
//           justifyContent: 'space-between',
//         }}
//       >
//         <div style={{ flex: 1, marginRight: '20px', textAlign: 'left' }}>
//           <h2>Create a New Post</h2>
//           <div>
//             <TextField
//               label="Image"
//               variant="outlined"
//               value={newPost.image}
//               onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
//               fullWidth
//               margin="normal"
//             />
//           </div>
//           <div>
//             <TextField
//               label="Title"
//               variant="outlined"
//               value={newPost.title}
//               onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//               fullWidth
//               margin="normal"
//             />
//           </div>
//           <div>
//             <TextField
//               label="Size"
//               variant="outlined"
//               value={newPost.size}
//               onChange={(e) => setNewPost({ ...newPost, size: e.target.value })}
//               fullWidth
//               margin="normal"
//             />
//           </div>
//           <div>
//             <FormControl fullWidth variant="outlined" margin="normal">
//               <InputLabel id="category-label">Category</InputLabel>
//               <Select
//                 label="categories"
//                 labelId="categories-label"
//                 value={newPost.categories}
//                 onChange={(e) => setNewPost({ ...newPost, categories: e.target.value })}
//               >
//                 <MenuItem value="men">Men</MenuItem>
//                 <MenuItem value="women">Women</MenuItem>
//                 <MenuItem value="kids">Kids</MenuItem>
//               </Select>
//             </FormControl>
//           </div>
//           <div>
//             <TextField
//               label="Price"
//               variant="outlined"
//               value={newPost.price}
//               onChange={(e) => setNewPost({ ...newPost, price: e.target.value })}
//               fullWidth
//               margin="normal"
//             />
//           </div>
//           <div>
//             <TextField
//               label="Description"
//               variant="outlined"
//               value={newPost.description}
//               onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
//               fullWidth
//               margin="normal"
//             />
//           </div>
//           <div>
//             <TextField
//               label="Stock"
//               variant="outlined"
//               value={newPost.stock}
//               onChange={(e) => setNewPost({ ...newPost, stock: e.target.value })}
//               fullWidth
//               margin="normal"
//             />
//           </div>
//           <div>
//             <TextField
//               label="Brand"
//               variant="outlined"
//               value={newPost.brand}
//               onChange={(e) => setNewPost({ ...newPost, brand: e.target.value })}
//               fullWidth
//               margin="normal"
//             />
//           </div>
//           <Button
//             variant="contained"
//             style={{ backgroundColor: '#6C5DD3', color: '#FFFFFF', marginTop: '10px' }}
//             onClick={handlePostClick}
//           >
//             Post
//           </Button>
//         </div>

//         <div style={{ flex: 1, textAlign: 'center' }}>
//           <h2>My Products</h2>
//           <div>
//             {/* Display existing products here */}
//             {/* You can add a loop to map through your products and display them */}
//             {dummyProducts.map((product, index) => (
//               <p key={index}>{product}</p>
//             ))}
//           </div>
//         </div>
//       </Box>
//     </div>
//   );
// };

// export default ProfileSeller;


import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const ProfileSeller = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(userData.description || '');
  const [newPost, setNewPost] = useState({
    image: '',
    title: '',
    size: '',
    categories: '',
    price: '',
    description: '',
    stock: '',
    brand: '',
    userId: userData.id,
  });
  const [sellerProducts, setSellerProducts] = useState([]);

  const fetchSellerProducts = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8001/api/products/getProductsByUser/${userId}`);
      if (response.ok) {
        const sellerProducts = await response.json();
        console.log('sellerProducts',sellerProducts)
        setSellerProducts(sellerProducts);
      } else {
        console.error(`Failed to fetch seller products. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching seller products:', error);
    }
  };
  useEffect(() => {
    // Fetch seller products on component mount
    fetchSellerProducts(userData.id);
  }, [userData.id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log('Edited Description:', editedDescription);
    setIsEditing(false);
  };

  const handlePostClick = async () => {
    console.log('New Post:', newPost);

    try {
      const response = await fetch('http://localhost:8001/api/products/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newPost,
          userId: userData.id,
        }),
      });

      if (response.ok) {
        console.log('Product created successfully');
        // Refresh seller products after creating a new one
        fetchSellerProducts(userData.id);
      } else {
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div>
      {/* Profile Section */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <img
            src={userData.image}
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <p style={{ marginTop: '10px', fontSize: '1.5rem', fontWeight: 'bold' }}>
          {userData.name}
        </p>
        {isEditing ? (
          <div style={{ margin: '10px 0' }}>
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: '#6C5DD3', color: '#FFFFFF', marginRight: '10px' }}
              onClick={handleSaveClick}
            >
              Save
            </Button>
          </div>
        ) : (
          <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: '1rem', color: 'white', marginRight: '10px' }}>
              {editedDescription || 'Welcome to my profile'}
            </p>
            <Button
              variant="contained"
              style={{ backgroundColor: '#6C5DD3', color: '#FFFFFF' }}
              onClick={handleEditClick}
            >
              Edit
            </Button>
          </div>
        )}
      </div>

      {/* Create New Post Section */}
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Section: Create New Post */}
        <div style={{ flex: 1, marginRight: '20px', textAlign: 'left' }}>
          <h2>Create a New Post</h2>
          <div>
            <TextField
              label="Image"
              variant="outlined"
              value={newPost.image}
              onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Title"
              variant="outlined"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Size"
              variant="outlined"
              value={newPost.size}
              onChange={(e) => setNewPost({ ...newPost, size: e.target.value })}
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                label="categories"
                labelId="categories-label"
                value={newPost.categories}
                onChange={(e) => setNewPost({ ...newPost, categories: e.target.value })}
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField
              label="Price"
              variant="outlined"
              value={newPost.price}
              onChange={(e) => setNewPost({ ...newPost, price: e.target.value })}
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Description"
              variant="outlined"
              value={newPost.description}
              onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Stock"
              variant="outlined"
              value={newPost.stock}
              onChange={(e) => setNewPost({ ...newPost, stock: e.target.value })}
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Brand"
              variant="outlined"
              value={newPost.brand}
              onChange={(e) => setNewPost({ ...newPost, brand: e.target.value })}
              fullWidth
              margin="normal"
            />
          </div>
          <Button
            variant="contained"
            style={{ backgroundColor: '#6C5DD3', color: '#FFFFFF', marginTop: '10px' }}
            onClick={handlePostClick}
          >
            Post
          </Button>
        </div>

        {/* Right Section: Display Products */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h2>My Products</h2>
          <div>
            {/* Display seller's products */}
            {sellerProducts.map((product) => (
              <p key={product.id}>{product}</p>
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ProfileSeller;
