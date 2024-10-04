// src/Login.js

import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Here, you would usually send a request to your authentication API
    console.log('Logging in with:', { email, password });

    // Clear the error if successful
    setError('');
  };

  return (
    <div className='background' >  
      <div className="login-container">
    <h2 className="login-title">Login</h2>
    <form onSubmit={handleSubmit} className="login-form">
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="login-button">Login</button>
    </form>
  </div></div>
  );
};

export default Login;
