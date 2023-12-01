
   
// import React, { useState } from 'react';
// import axios from 'axios';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';

// const SignUp = ({ switchView }) => {
//   const [name, setName] = useState('');
  
  
 

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [error, setError] = useState('');

//   const handleAddUser = async () => {
//     try {
//       const response = await axios.post('http://localhost:8001/auth/signup', {
//        name,
//         email,
//         password,
//         role
//       });

//         <Link to="/Login">Explore</Link>
//       } catch (err) {
//       console.error('Error adding user:', err);
//       setError(err.response?.data?.error || 'An error occurred. Please try again.');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" style={{ backgroundColor: '#0C2340', padding: '20px', borderRadius: '10px', marginTop: '50px', color: 'white' }}>
//       <Typography variant="h4" gutterBottom>
//         SignUp
//       </Typography>
//       {error && <Typography variant="body2" style={{ color: 'red', marginBottom: '10px' }}>{error}</Typography>}
//       <TextField
//         fullWidth
//         margin="normal"
//         label={name.trim() === '' ? ' Name' : ''}
//         type="text"
//         variant="outlined"
//         onChange={(e) => setName(e.target.value)}
//         InputProps={{
//           style: { backgroundColor: 'white', color: '#0C2340' },
//         }}
//       />
      
//       <TextField
//         fullWidth
//         margin="normal"
//         label={email.trim() === '' ? 'Email' : ''}
//         type="email"
//         variant="outlined"
//         onChange={(e) => setEmail(e.target.value)}
//         InputProps={{
//           style: { backgroundColor: 'white', color: '#0C2340' },
//         }}
//       />
//       <TextField
//         fullWidth
//         margin="normal"
//         label={password.trim() === '' ? 'Password' : ''}
//         type="password"
//         variant="outlined"
//         onChange={(e) => setPassword(e.target.value)}
//         InputProps={{
//           style: { backgroundColor: 'white', color: '#0C2340' },
//         }}
//       />
      
      
     
//       <Button onClick={handleAddUser} variant="contained" style={{ backgroundColor: '#5A4FCF', color: 'white' }} fullWidth>
//         Submit
//       </Button>
//     </Container>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); 
  const [image, setImage] = useState('');  
  const [error, setError] = useState('');

  const handleAddUser = async () => {
    try {
      const response = await axios.post('http://localhost:8001/auth/signup', {
        name,
        email,
        password,
        role,
        image,
      });
console.log(name,
  email,
  password,
  role,
  image,)
      // You can navigate to the login page or any other route if needed
      window.location.href = '/login';    } catch (err) {
      console.error('Error adding user:', err);
      setError(err.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '10px', borderRadius: '10px', marginTop: '50px', color: 'white' }}>
      <Typography variant="h4" gutterBottom>
        SignUp
      </Typography>
      {error && <Typography variant="body2" style={{ color: 'red', marginBottom: '10px' }}>{error}</Typography>}
      <TextField
        fullWidth
        margin="normal"
        label={name.trim() === '' ? ' Name' : ''}
        type="text"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          style: { backgroundColor: 'white', color: '#0C2340' },
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label={email.trim() === '' ? 'Email' : ''}
        type="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          style: { backgroundColor: 'white', color: '#0C2340' },
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        label={password.trim() === '' ? 'Password' : ''}
        type="password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          style: { backgroundColor: 'white', color: '#0C2340' },
        }}
      />

      {/* Dropdown for selecting role */}
      <label htmlFor="role" style={{ color: 'white', marginBottom: '10px' }}>Role:</label>
      <select
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ width: '100%', padding: '8px', backgroundColor: 'white', color: '#0C2340' }}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="seller">Seller</option>
      </select>
      <TextField
 fullWidth
 margin="normal"
 label="Image URL"
 type="text"
 onChange={(e) => setImage(e.target.value)}
 InputProps={{
   style: { backgroundColor: 'white', color: '#0C2340' },
 }}
/>
      

      <Button onClick={handleAddUser} variant="contained" style={{ backgroundColor: '#5A4FCF', color: 'white', marginTop: '10px' }} fullWidth>
        Submit
      </Button>
    </Container>
  );
};

export default SignUp;
