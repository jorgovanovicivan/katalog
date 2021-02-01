import React from 'react';
import './Destinations.css';
import CardItem from './CardItem';

function Destinations() {
  return (
    <div className='cards'>
      <h1>TOP DESTINACIJE</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/senja.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle Explore the hidden waterfall deep inside the Amazon Jungle Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Norveška'
              path='/galerija'
            />
            
            <CardItem
              src='img/china1.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='China'
              path='/galerija'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/hrvatska.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle Explore the hidden waterfall deep inside the Amazon Jungle Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Norveška'
              path='/galerija'
            />
            
            <CardItem
              src='img/comfort1.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='China'
              path='/galerija'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/saturnia.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle Explore the hidden waterfall deep inside the Amazon Jungle Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Norveška'
              path='/galerija'
            />
            
            <CardItem
              src='img/kefalonija4.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='China'
              path='/galerija'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Destinations;