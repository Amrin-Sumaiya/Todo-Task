
import React, { useState } from 'react';

//wrapped the components one componenets to another by same logic
// operation is use for the increments and decrements indicating by a string
const WithCounter = (WrappedComponent, operation) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    // Pass the appropriate function based on operation
    const action = operation === 'increase' ? increment : decrement;

    return (
      <WrappedComponent 
        count={count} 
        action={action} 
        {...props}  //renders by count , action and props
      />
    );
  };
};

export default WithCounter;


