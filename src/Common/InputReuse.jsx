import React from 'react';

const InputReuse = ({ id, type, label = "", placeholder, register, option = [], error }) => {
  console.log(`error for ${id} ======>>>>`, error?.[id]);
  
  
  if (type === 'select') {
    return (
      <div className="mb-4">
        
        <label htmlFor={id} className="block text-sm font-medium text-black mb-1">
          {label}
        </label>
        <select
          id={id}
          {...register}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2"
        >
          {option?.map((option, index) => (
            <option key={index} value={option.value}>
              {option?.label}
            </option>
          ))}
        </select>
        {error?.[id] && <p className="text-red-500 text-xs mt-1">{error[id]?.message}</p>}
      </div>
    );
  }
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-black mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2"
        placeholder={placeholder}
      />
   {error?.[id] && <p className="text-red-500 text-xs mt-1">{error[id]?.message}</p>}
    </div>
  );
};

export default InputReuse;

