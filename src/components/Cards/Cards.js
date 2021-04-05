
import React from 'react';
import "./Cards.css";
import pic1 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-Engine.png"
import pic2 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-track.png"
import pic3 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-track.png"
import pic4 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-track.png"
import pic5 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-track.png"
import pic6 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-track.png"





import CardItem from "../CardItem/CardItem.js"



const Cards = () => {
  return (
    <div className='cards'>
      <h1>Portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={pic1}
              text='Employee Engine Generator'
              label='button'
              path='create external path'
            />
            <CardItem
              src={pic2}
              text='Employee Tracker'
              label='Button'
              path='create external path'
            />
            <CardItem
              src={pic3}
              text='Project #2: The Bechdel Billboard'
              label='button'
              path='create external path'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={pic3}
              text='Password Generator'
              label='button'
              path='create external path'

            />
            <CardItem
              src={pic3}
              text='enter test'
              label='button'
              path='create external path'
            />
            <CardItem
              src={pic3}
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