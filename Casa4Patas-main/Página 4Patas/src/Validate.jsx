import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Validate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (window.localStorage.getItem('admin') == '') {
      console.log('Passamos aqui');
      return navigate('/');
    }
    console.log('algo');
  }, [location]);

  return (
    <>
      <h1>Olá</h1>
    </>
  );
};

export default Validate;
