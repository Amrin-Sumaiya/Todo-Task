import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WithAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    useEffect(() => {
      if (username !== 'Amrin' || email !== 'amrinahsan34@gmail.com') {
        navigate('/login');
      }
    }, [username, email, navigate]);

    return username === 'Amrin' && email === 'amrinahsan34@gmail.com' ? (
      <WrappedComponent {...props} />
    ) : null;
  };
  return Wrapper;
};

export default WithAuth;





