import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Primili smo Vaš zahtev</h1>
      <img className='form-img-2' src='img/handshake.svg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;