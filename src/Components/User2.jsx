import React from 'react';
import WithAuth from './HOC/WithAuth';

const User2 = () => {
  const user2 = {
    name: 'Amrin',
    email: 'amrinahsan34@gmail.com',
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{user2.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{user2.email}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
          Contact
        </button>
      </div>
    </div>
  );
};

export default WithAuth(User2);

