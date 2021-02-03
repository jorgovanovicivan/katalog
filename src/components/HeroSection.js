import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Zdravo</h1>
      <video src='/video/video1.mp4' autoPlay loop muted />
      <p>Mi smo   WORLD++ </p>
      <div className='hero-btns'>
       
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         KONTAKT
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;