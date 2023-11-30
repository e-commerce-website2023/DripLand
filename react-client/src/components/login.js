import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  
      if (response.data.success) {
        setUserData(response.data); // Assuming the response contains user data directly
        window.location.href = '/Home';
      } else {
        setError(response.data.error || 'Invalid email or password');
      }
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  

  return (
    <div>
      <h4>Login</h4>
      <input
        type="text"
        placeholder={email.trim() === '' ? 'Email' : ''}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder={password.trim() === '' ? 'Password' : ''}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>
        Login
      </button>
      <br />
      <br />
      <p>
        Don't have an account? Join Us
      </p>
      <p>
        Don't have an account? 
        <Link to="/Signup">SignUp</Link>
      </p>
    </div>
  );
};

export default Login;
