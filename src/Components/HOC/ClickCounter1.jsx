import React from 'react'
import withCounter from './WithCounter'

const ClickCounter1 = ( { count, action }) => {
  return (
// oneclick triggered action function ( in the case increments)

// action is a function , using fo rupdating the value
    <div className="flex flex-col items-center space-y-4">
        <h2 className="text-3xl"> Increase offering $10 Money</h2>
        <p>Current Count: {count}</p>
        <button
        onClick={action}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Click up
      </button> 
      
    </div>
  )
}

export default withCounter (ClickCounter1, 'increase');
