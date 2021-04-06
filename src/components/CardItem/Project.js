import React from 'react';
import "./Project.css";

import { Link } from 'react-router-dom';


function Project(props) {
  return (

    <li className='cards__item holdbox'>
      <div className='cards__item__link cardbox'>
        <figure className='cards__item__pic-wrap'>
         <a href ={props.deployed} target ="_blank">
          <img
            className='cards__item__img'
            alt='Assignment Image'
            src={props.src}
          />
          </a>
        </figure>
        <div className='cards__item__info'>
          <h3 className ="cards__title">{props.title}</h3>
          <h5 className='cards__item__text'>{props.text}</h5>
          <a href={props.github} target="_blank" 
            className="buttonCode buttonspace"> View Code </a>
          <a href={props.deployed} target="_blank" 
            className="buttonLive "> View Live </a>

        </div>
      </div>
    </li>



  );
}

export default Project;