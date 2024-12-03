import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'Amrin' && email === 'amrinahsan34@gmail.com') {
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      navigate('/User2');
    } else {
      setError('Invalid username or email');
    }
  };


  const handleNextClick = () => {
    navigate('/firstform');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 mb-2 w-full border border-gray-500 rounded-lg"
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 mb-2 w-full border border-gray-500 rounded-lg"
          />
<div className="space-y-3">
  <button
    type="submit"
    className="px-6 py-3 w-full bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2  transition duration-300"
  >
    Login
  </button>
  <button
    type="button" onClick={handleNextClick} // Changed to type="button" for Next, as it’s not a form submission
    className="px-6 py-3 w-full text-blue-600 font-semibold border border-blue-600 rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2  transition duration-300"
  >
    Next
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default Login;


