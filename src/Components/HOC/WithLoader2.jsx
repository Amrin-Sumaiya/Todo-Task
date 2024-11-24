import React, { useState, useEffect } from 'react';

const WithLoader2 = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);


    }, []);

  return (
    <div>
      {loading ? <p>Loading.........</p> : <WrappedComponent {...props} />}
    </div>
  )
}
}

export default WithLoader2
