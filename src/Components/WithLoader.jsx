
// import React, {useState, useEffect} from 'react'



// const WithLoader = (wrappedComponenets) => {
//   return (props) => {
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {    

//     // simulate a delay for 2 sec loading
//       setTimeout(() => {
//         setLoading(false);
//       }, 2000);

//     }, []) ;// this empley array ensure that effect runs only once when componnets mounts



//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//   {loading ? (
//     <div className="flex justify-center items-center space-x-2">
//       <div className="w-8 h-8 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
//       <p className="text-xl text-black">Loading...</p>
//     </div>
//   ) : (
//     <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl w-full">
//       <wrappedComponenets {...props} />
//     </div>
//   )}
// </div>
//   )
// }
// }
// export default WithLoader



import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WithLoader = (WrapperComponent) => {
  const Wrapper = () => {
    const navigate = useNavigate();
    const isAuth = true; // Assume you are checking for authentication status here

    useEffect(() => {
      if (!isAuth) {
        navigate('/login'); // Redirect if not authenticated
      }
    }, [isAuth, navigate]);

    return isAuth ? <WrapperComponent /> : null; // Render the wrapped component if authenticated
  };

  return Wrapper;
};

export default WithLoader;

