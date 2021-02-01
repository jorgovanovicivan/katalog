import React from 'react';
import './Kontakt.css';

export default function Kontakt() {
  return   ( 
  <body>
  <div className='kontakt'>

  <div className='title'>
    <h1>KONTAKT</h1>
    <div className='contact-form'> </div>
      <div className='input-field'>
       <input className='input' placeholder='Ime'></input>
       <input className='input' placeholder='Email'></input>
       <input className='input' placeholder='Telefon'></input>
       <input className='input' placeholder='Naslov'></input>
       </div>
        <div className='msg'>
        <textarea placeholder="Poruka"></textarea>
        <div className='btn'>Pošalji</div>
      </div>
      

    </div>
  </div>
</body>
);
  
  
}