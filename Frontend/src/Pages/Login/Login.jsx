import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loginType, setLoginType] = useState('member');

  const navigate = useNavigate();
  const userId = sessionStorage.getItem('loggedin');

  useEffect(() => {
    if (userId) {
      setIsUserLoggedIn(true);
    }
  }, [userId]);

  useEffect(() => {
    if (isUserLoggedIn) {
      setTimeout(() => {
        navigate('/');
      }, 100);
    }
  }, [isUserLoggedIn, navigate]);

  useEffect(() => {
    setErrorMessage('');
  }, [username, password]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!username || !password) {
      setErrorMessage('Username and Password are required.');
      return;
    }

    // Mock login logic (replace this with real API call)
    if (username === 'test' && password === 'password') {
      sessionStorage.setItem('loggedin', 'true');
      setSuccessMessage('Login successful!');
      setIsUserLoggedIn(true);
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (

    <div style={{ backgroundColor: '#3b3b3b'}} className="flex min-h-screen items-center justify-center p-4" >
      <div className="flex w-full max-w-md flex-col items-center bg-white bg-opacity-90 shadow-md rounded-lg p-8 space-y-8">
        <div className="flex flex-col items-center">
          <p className="text-gray-700 font-bold text-4xl">Guide Ink</p>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 text-center">Log In</h2>
        <p className="text-md text-gray-600 text-center mt-2">
          Don't have a member account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </p>
        <form onSubmit={handleLogin} className="space-y-4 mt-6 w-full">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="h-4 w-4 text-blue-600"
            />
            <label className="text-sm text-gray-600">Show Password</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
        {successMessage && <p className="text-green-600 text-center mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 text-center mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;
