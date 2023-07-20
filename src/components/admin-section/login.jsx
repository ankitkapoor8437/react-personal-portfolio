import React from 'react'
import '../admin-section/login.css'
import { useState } from 'react';

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleSignInClick = () => {
    setShowLogin(true);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    // For demonstration purposes, we'll just display an alert
    alert('Login Successful!');
  };

  return (
    <div id='login' className='container'>
      {/* <button onClick={handleSignInClick}>Sign In</button> */}

      <form onSubmit={handleLoginSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

