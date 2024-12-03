import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import InputReuse from '../../Common/InputReuse';

let renderCount = 0;

const FirstForm = () => {
  const form = useForm(); // Initialize react-hook-form
  const { register, control, handleSubmit, formState: { errors } } = form;

  const onSubmit = (data) => {
    console.log('Form Submitted', data);
  };

  const categoryOptions = [
    { value: 'teach', label: 'Teach' },
    { value: 'lifestyle', label: 'LifeStyle' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'music', label: 'Music' },
    { value: 'video', label: 'Video' },
  ];

  renderCount++;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          YouTube Form ({renderCount / 2})
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          <InputReuse
            id="username"
            type="text"
            label="Username"
            placeholder="Enter your username"
            register={register('username', {
              required: 'Username is required',
              minLength: {
                value: 5,
                message: 'Username must be at least 10 characters long',
              },
            })}
            error={errors}
          />

          <InputReuse
            id="email"
            type="email"
            label="E-Mail"
            placeholder="Enter your email"
            register={register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: 'Please enter a valid email',
              },
            })}
            error={errors}
          />

          <InputReuse
            id="category"
            type="select"
            label="Category"
            register={register('category', {
              required: 'Please select a category',
            })}
            option={categoryOptions}
            error={errors}
          />

          <InputReuse
            id="channel"
            type="text"
            label="Channel Name"
            placeholder="Enter your channel name"
            register={register('channel', {
              required: 'Channel name is required',
              maxLength: {
                value: 30,
                message: 'Channel name cannot exceed 30 characters',
              },
            })}
            error={errors}
          />

          <button
            type="submit"
            className="w-full py-3 px-6 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Submit
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default FirstForm;

