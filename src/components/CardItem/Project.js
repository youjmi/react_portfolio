import React from 'react';
import { Link } from 'react-router-dom';


function Project(props) {
  return (

    <li className='cards__item holdbox'>
      <div className='cards__item__link cardbox' to={props.path}>
        <figure className='cards__item__pic-wrap'>
          <img
            className='cards__item__img'
            alt='Assignment Image'
            src={props.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
          <a href={props.github} target="_blank" 
            className="btn ">View Code</a>
          <a href={props.deployed} target="_blank" 
            className="btn ">View Live</a>

        </div>
      </div>
    </li>



  );
}

export default Project;