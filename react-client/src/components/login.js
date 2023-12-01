// import React, { useState } from 'react';
// import axios from 'axios';


// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


// const Login = ({ setUserData }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [redirect, setRedirect] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8001/auth/signin', {
//         email,
//         password,
//       });
  
//       if(response.data.message === 'Login successful') {
//         console.log(response.data.user)
//         setUserData(response.data.user)
//         // Save user data  localStorage
//         localStorage.setItem('userData', JSON.stringify(response.data.user));
//         setRedirect(true);

//       } else {
//         setError(response.data.error || 'Invalid email or password');
//       }
//     } catch (err) {
//       console.log(err);
//       setError('An error occurred. Please try again.');
//     }
//   };

//   if (redirect) {
    
//     return (
      
//       <div style={{ textAlign: 'center', marginTop: '20vh' }}>
//       <Typography variant="h4" style={{ color: '#FFFFFF', marginBottom: '20px' }}>
//         Welcome To Drip Land
//       </Typography>
//       <Link to="/">
//         <Button
//           variant="contained"
//           style={{
//             backgroundColor: '#B75CFF',
//             color: '#FFFFFF',
//             padding: '10px 20px',
//             textTransform: 'none', // To prevent uppercase transformation
//           }}
//         >
//           Want to purchase shoes?
//         </Button>
//       </Link>
//     </div>
//     );
//   }

//   return (
    
//     <div>
//       <h4>Login</h4>
//       <input
//         type="text"
//         placeholder={email.trim() === '' ? 'Email' : ''}
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder={password.trim() === '' ? 'Password' : ''}
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <button onClick={handleLogin}>
//         Login
//       </button>
//       <br />
//       <br />
//       <p>
//         Don't have an account? Join Us
//       </p>
//       <p>
//         Don't have an account? 
//         <Link to="/Signup">SignUp</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'; // Import the Link component

const Login = ({ setUserData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8001/auth/signin', {
        email,
        password,
      });

      if (response.data.message === 'Login successful') {
        setUserData(response.data.user);
        // Redirect or update state to go to the home page
      } else {
        setError(response.data.error || 'Invalid email or password');
      }
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '50px',
        color: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label={email.trim() === '' ? 'Email' : ''}
        type="text"
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
      {error && (
        <Typography variant="body2" style={{ color: 'red', marginBottom: '10px' }}>
          {error}
        </Typography>
      )}
      <Button
        onClick={handleLogin}
        component={Link} // Use Link as the component for the button
        to="/" // Specify the path to the SignUp page
        variant="contained"
        style={{ backgroundColor: '#5A4FCF', color: 'white' }}
        fullWidth
      >
        Login
      </Button>
      <br />
      <br />
      <Typography variant="body2" style={{ color: 'white', marginBottom: '10px' }}>
        Don't have an account? Join Us
      </Typography>
      <Button component={Link} to="/Signup" fullWidth>
        SignUp
      </Button>
    </Container>
  );
};

export default Login;