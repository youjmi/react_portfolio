
import React from 'react';
import "./Cards.css";
import CardItem from "../CardItem/CardItem.js"



const Cards = () => {
  return (
    <div className='cards'>
      <h1>Portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/employee-Engine.png'
              text='Employee Engine Generator'
              label='button'
              path='create external path'
            />
            <CardItem
              src='images/employee-track.png'
              text='Employee Tracker'
              label='Button'
              path='create external path'
            />
            <CardItem
              src='images/welcomepage.png'
              text='Project #2: The Bechdel Billboard'
              label='button'
              path='create external path'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Screen Shot 2021-01-14 at 3.25.42 PM.png'
              text='Password Generator'
              label='button'
              path='create external path'

            />
            <CardItem
              src='images/Screen Shot 2021-01-14 at 3.32.06 PM.png'
              text='enter test'
              label='button'
              path='create external path'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Rtenter text. '
              label='button'
              path='create external path'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards