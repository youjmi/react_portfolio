
import React from 'react';
import "./Cards.css";
import pic1 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/Eddy.png"
import pic2 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-track.png"
import pic3 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-track.png"
import pic4 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-track.png"
import pic5 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-track.png"
import pic6 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/employee-track.png"
import CardItem from "../CardItem/Project.js"



const Cards = () => {
  return (
    <div className='cards'>
      <h1>Portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={pic1}
              title= "Eddy: Employee Designated Directory"
              text='Employee Engine Generator'
              github ="https://github.com/youjmi/emp-dir"
              deployed ="https://youjmi.github.io/emp-dir/"
            />
            <CardItem
              src={pic2}
              title= ""
              text='Employee Engine Generator'
              github =""
              deployed =""
            />
            <CardItem
              src={pic3}
              title= ""
              text='Employee Engine Generator'
              github =""
              deployed =""
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={pic3}
              title= ""
              text='Employee Engine Generator'
              github =""
              deployed =""
            />
            <CardItem
              src={pic3}
              title= ""
              text='Employee Engine Generator'
              github =""
              deployed =""
            />
            <CardItem
              src={pic3}
              title= ""
              text='Employee Engine Generator'
              github =""
              deployed =""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards