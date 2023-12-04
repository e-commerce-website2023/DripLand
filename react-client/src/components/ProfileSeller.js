

// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import { Card, CardContent, Typography } from '@mui/material';

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
//   const [sellerProducts, setSellerProducts] = useState([]);
 
//   const fetchSellerProducts = async (userId) => {
//     try {
//       const response = await fetch(`http://localhost:8001/api/products/getProductsByUser/${userId}`);
//       if (response.ok) {
//         const sellerProducts = await response.json();
//         setSellerProducts(sellerProducts);
//       } else {
//         console.error(`Failed to fetch seller products. Status: ${response.status}`);
//       }
//     } catch (error) {
//       console.error('Error fetching seller products:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch seller products on component mount
//     fetchSellerProducts(userData.id);
//   }, [userData.id]);

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
//           userId: userData.id,
//         }),
//       });

//       if (response.ok) {
//         console.log('Product created successfully');
//         // Refresh seller products after creating a new one
//         fetchSellerProducts(userData.id);
//       } else {
//         console.error('Failed to create product');
//       }
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
//   };

//   //update product 

//   const [editedProduct, setEditedProduct] = useState({
//     id: '',
//     image: '',
//     title: '',
//     size: '',
//     categories: '',
//     price: '',
//     description: '',
//     stock: '',
//     brand: '',
//     userId: userData.id
//   });

//   const handleEditProduct = (productId) => {
//     console.log('Edit product clicked:', productId);
  
//     // Find the product to be edited from the sellerProducts array
//     const productToEdit = sellerProducts.find((product) => product.id === productId);
  
//     // Set the state with the product details for editing
//     setEditedProduct({
//       id: productToEdit.id,
//       image: productToEdit.image,
//       title: productToEdit.title,
//       size: productToEdit.size,
//       categories: productToEdit.categories,
//       price: productToEdit.price,
//       description: productToEdit.description,
//       stock: productToEdit.stock,
//       brand: productToEdit.brand,
//       userId: userData.id,
//     });
  
//     // Set isEditing to true to show the editing form
//     setIsEditing(true);
//   };

//   const handleSaveEdit = async () => {
//     console.log('Edited Product:', editedProduct);

//     try {
//       const response = await fetch(`http://localhost:8001/api/products/${editedProduct.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedProduct),
//       });

//       if (response.ok) {
//         console.log('Product updated successfully');
//         // Refresh seller products after updating
//         fetchSellerProducts(userData.id);
//       } else {
//         console.error('Failed to update product');
//       }
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };




// //delete
//   const handleDeleteProduct = async (productId) => {
//     console.log('Delete product clicked:', productId);

//     try {
//       const response = await fetch(`http://localhost:8001/api/products/${productId}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         console.log('Product deleted successfully');
//         // Refresh seller products after deleting one
//         fetchSellerProducts(userData.id);
//       } else {
//         console.error('Failed to delete product');
//       }
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   return (
//     <div>
//       {/* Profile Section */}
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <div
//           style={{
//             width: '150px',
//             height: '159px',
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
//       <div style={{ display: 'flex' }}>
//         {/* Left Section: Create New Post */}
//         <Box
//           style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//             padding: '30px',
//             borderRadius: '8px',
//             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//             marginRight: '20px', // Adjust the spacing between boxes
//             marginLeft: '40px', // Adjust the spacing between boxes
//             flex: 1,
//             textAlign: 'center'
//           }}
//         >
//           <h2 style={{ color: '#6C5DD3', fontSize: '24px', marginBottom: '20px' }}>Create a New Post</h2>
//           <div>
//             <TextField
//               label="Image"
//               variant="outlined"
//               value={newPost.image}
//               onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
//               fullWidth
//               margin="normal"
//               InputProps={{
//                 style: { backgroundColor: 'white' },
//               }}
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
//               InputProps={{
//                 style: { backgroundColor: 'white' },
//               }}
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
//               InputProps={{
//                 style: { backgroundColor: 'white' },
//               }}
//             />
//           </div>
//           <div>
//             <FormControl fullWidth variant="outlined" margin="normal" >
//               <InputLabel id="categories-label">Category</InputLabel>
//               <Select
//                 label="categories"
//                 labelId="categories-label"
//                 value={newPost.categories}
//                 onChange={(e) => setNewPost({ ...newPost, categories: e.target.value })}
//                 inputProps={{
//                   style: { backgroundColor: 'white' },
//                 }}
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
//               InputProps={{
//                 style: { backgroundColor: 'white' },
//               }}
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
//               InputProps={{
//                 style: { backgroundColor: 'white' },
//               }}
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
//               InputProps={{
//                 style: { backgroundColor: 'white' },
//               }}
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
//               InputProps={{
//                 style: { backgroundColor: 'white' },
//               }}
//             />
//           </div>
//           <Button
//             variant="contained"
//             fullWidth
//             style={{ backgroundColor: '#6C5DD3', color: '#FFFFFF', marginTop: '10px' }}
//             onClick={handlePostClick}
//           >
//             Post
//           </Button>
//         </Box>

//         {/* Right Section: Display Products */}
//         <Box
//           style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//             borderRadius: '8px',
//             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//             flex: 2,
//             textAlign: 'center',
//             padding: '20px', // Add padding for better spacing
//             marginRight: '40px', // Adjust the spacing between boxes
//             marginLeft: '1px', // Adjust the spacing between boxes
//           }}
//         >
//           <h2 style={{ color: '#6C5DD3', fontSize: '24px', marginBottom: '20px', }}>My Products</h2>
//           <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' ,alignItems: 'center' }}>
        

//             {/* Display seller's products */}
//             {sellerProducts
//               .slice()
//               .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//               .map((product) => (
//                 <Card
//                   key={product.id}
//                   sx={{
//                     maxWidth: '300px',
//                     borderRadius: 1.5,
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                     margin: '100px',
//                     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                   }}
//                 >
//                   <CardContent>
//                     <div onClick={() => console.log('Product clicked:', product)}>
//                       <img
//                         src={product.image}
//                         alt={product.title}
//                         style={{
//                           display: 'block',
//                           marginLeft: 'auto',
//                           marginRight: 'auto',
//                           maxWidth: '100%',
//                           height: '200px',
//                           objectFit: 'cover',
//                           borderRadius: 8,
//                           marginBottom: 1,
//                           cursor: 'pointer',
//                         }}
//                       />
//                     </div>

//                     <Typography variant="h1" component="div" sx={{ marginTop: 2, marginBottom: 1, color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 1 }}>
//                       {product.title}
//                     </Typography>
//                     <Typography variant="body1" component="div" sx={{ fontSize: 11, color: '#fff9', marginBottom: 1 }}>
//                       {product.description}
//                     </Typography>
//                     <Typography variant="body1" style={{ fontSize: 16, fontWeight: 'bold', color: '#ffff', marginBottom: 1 }}>
//                       Price: {product.price} DT
//                     </Typography>
//                     <div style={{ display: 'flex', justifyContent: 'center' }}>
//                       <Button
//                         variant="contained"
//                         style={{
//                           backgroundColor: '#6C5DD3',
//                           color: '#FFFFFF',
//                           borderRadius: 4,
//                           marginRight: 1,
//                           height: 40,
//                           fontSize: 14,
//                         }}
//                         onClick={() => handleEditProduct(product.id)}
//                       >
//                         Edit Post
//                       </Button>
//                       <Button
//                         variant="contained"
//                         style={{
//                           backgroundColor: '#6C5DD3',
//                           color: '#FFFFFF',
//                           borderRadius: 4,
//                           marginRight: 1,
//                           height: 40,
//                           fontSize: 14,
//                         }}
//                         onClick={() => handleDeleteProduct(product.id)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//           </div>
//         </Box>
//       </div>
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
import { Card, CardContent, Typography } from '@mui/material';

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
  const [editedProduct, setEditedProduct] = useState({
    id: '',
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

  const fetchSellerProducts = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8001/api/products/getProductsByUser/${userId}`);
      if (response.ok) {
        const sellerProducts = await response.json();
        setSellerProducts(sellerProducts);
      } else {
        console.error(`Failed to fetch seller products. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching seller products:', error);
    }
  };

  useEffect(() => {
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
        fetchSellerProducts(userData.id);
      } else {
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleEditProduct = (productId) => {
    const productToEdit = sellerProducts.find((product) => product.id === productId);

    setEditedProduct({
      id: productToEdit.id,
      image: productToEdit.image,
      title: productToEdit.title,
      size: productToEdit.size,
      categories: productToEdit.categories,
      price: productToEdit.price,
      description: productToEdit.description,
      stock: productToEdit.stock,
      brand: productToEdit.brand,
      userId: userData.id,
    });

    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    console.log('Edited Product:', editedProduct);

    try {
      const response = await fetch(`http://localhost:8001/api/products/${editedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      });

      if (response.ok) {
        console.log('Product updated successfully');
        fetchSellerProducts(userData.id);
        setIsEditing(false);
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    console.log('Delete product clicked:', productId);

    try {
      const response = await fetch(`http://localhost:8001/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Product deleted successfully');
        fetchSellerProducts(userData.id);
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      {/* Profile Section */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div
          style={{
            width: '150px',
            height: '159px',
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
      <div style={{ display: 'flex' }}>
        {/* Left Section: Create New Post */}
        <Box
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            marginRight: '10px', // Adjust the spacing between boxes
            marginLeft: '40px', // Adjust the spacing between boxes
            flex: 3,
            textAlign: 'center'
          }}
        >
          <h2 style={{ color: '#6C5DD3', fontSize: '24px', marginBottom: '20px' }}>Create a New Post</h2>
          <div>
            <TextField
              label="Image"
              variant="outlined"
              value={newPost.image}
              onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
              fullWidth
              margin="normal"
              InputProps={{
                style: { backgroundColor: 'white' },
              }}
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
              InputProps={{
                style: { backgroundColor: 'white' },
              }}
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
              InputProps={{
                style: { backgroundColor: 'white' },
              }}
            />
          </div>
          <div>
            <FormControl fullWidth variant="outlined" margin="normal" >
              <InputLabel id="categories-label">Category</InputLabel>
              <Select
                label="categories"
                labelId="categories-label"
                value={newPost.categories}
                onChange={(e) => setNewPost({ ...newPost, categories: e.target.value })}
                inputProps={{
                  style: { backgroundColor: 'white' },
                }}
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
              InputProps={{
                style: { backgroundColor: 'white' },
              }}
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
              InputProps={{
                style: { backgroundColor: 'white' },
              }}
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
              InputProps={{
                style: { backgroundColor: 'white' },
              }}
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
              InputProps={{
                style: { backgroundColor: 'white' },
              }}
            />
          </div>
          <Button
            variant="contained"
            fullWidth
            style={{ backgroundColor: '#6C5DD3', color: '#FFFFFF', marginTop: '10px' }}
            onClick={handlePostClick}
          >
            Post
          </Button>
        </Box>

        {/* Right Section: Display Products */}
        <Box
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            flex: 5,
            textAlign: 'center',
            padding: '20px', // Add padding for better spacing
            marginRight: '40px', // Adjust the spacing between boxes
            marginLeft: '1px', // Adjust the spacing between boxes
          }}
        >
          <h2 style={{ color: '#6C5DD3', fontSize: '24px', marginBottom: '20px', }}>My Products</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
            {/* Display seller's products */}
            {sellerProducts
              .slice()
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((product) => (
                <Card
                  key={product.id}
                  sx={{
                    maxWidth: '300px',
                    borderRadius: 1.5,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    margin: '100px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent>
                    <div onClick={() => console.log('Product clicked:', product)}>
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
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                    <Typography variant="h1" component="div" sx={{ marginTop: 2, marginBottom: 1, color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 1 }}>
                      {product.title}
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ fontSize: 11, color: '#fff9', marginBottom: 1 }}>
                      {product.description}
                    </Typography>
                    <Typography variant="body1" style={{ fontSize: 16, fontWeight: 'bold', color: '#ffff', marginBottom: 1 }}>
                      Price: {product.price} DT
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: '#6C5DD3',
                          color: '#FFFFFF',
                          borderRadius: 4,
                          marginRight: 1,
                          height: 40,
                          fontSize: 14,
                        }}
                        onClick={() => handleEditProduct(product.id)}
                      >
                        Edit Post
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: '#6C5DD3',
                          color: '#FFFFFF',
                          borderRadius: 4,
                          marginRight: 1,
                          height: 40,
                          fontSize: 14,
                        }}
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ProfileSeller;
