// src/LoginPage.js

import React, { useState } from 'react';
import Input from './Input';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation logic
    if (email === '' || password === '') {
      setErrorMessage('Please fill in both fields');
    } else {
      setErrorMessage('');
      // Add your login logic here
      console.log('Logging in with', email, password);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        {errorMessage && (
          <div className="text-red-500 text-sm text-center">{errorMessage}</div>
        )}
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
        

  
            <Input type="text" placeholder="enter your name" label="Username" required className="p-4"/>
            <Input type="password" placeholder="enter your password" label="password" required/>
       

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
