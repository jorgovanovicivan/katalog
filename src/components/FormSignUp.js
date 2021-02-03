import React from 'react';
import validate from './validateinfo';
import useForm from './useForm';
import './Form.css';



const FormSignUp = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
  
    return (
      <div className='form-content-right'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
           Kreiraj nalog i obrati nam se za sva pitanja!
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>Korisničko ime</label>
            <input
              className='form-input'
              type='text'
              name='username'
              placeholder='Korisničko ime'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Šifra</label>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Šifra'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Potvrdi Šifru</label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Potvrdi Šifru'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className='form-input-btn' type='submit'>
            Kreiraj nalog
          </button>
          <span className='form-input-login'>
            Već poseduješ nalog? Uloguj se <a href='#'>ovde</a>
          </span>
        </form>
      </div>
    );
  };
  
  export default FormSignUp;
