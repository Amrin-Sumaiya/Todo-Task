
import React from 'react';
import WithCounter from './WithCounter';

const ClickCounter2 = ({ count, action }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-3xl">Decrease offering $10 Money</h2>
      <p>Current Count: {count}</p>
      <button
        onClick={action}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Click down
      </button>
    </div>
  );
};

export default WithCounter(ClickCounter2, 'decrease');

