import React, { useState, useEffect } from 'react';

const WithLoader2 = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);

    return (
      <div className="flex justify-center items-center min-h-screen">
        {loading ? (
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-700 animate-pulse">Loading...</p>
          </div>
        ) : (
          <div className="w-full">
            <WrappedComponent {...props} />
          </div>
        )}
      </div>
    );
  };
};

export default WithLoader2;

