import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, currentTask }) => {
  const [value, setValue] = useState(currentTask || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value);
    setValue('');
  };

  return (
    <div className="bg-gray-100 max-w-lg mx-auto p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">Edit Task</h2>
      <form className="flex items-center space-x-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Edit your task here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-gray-600 transition duration-300"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;


