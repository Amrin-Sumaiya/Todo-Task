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
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


