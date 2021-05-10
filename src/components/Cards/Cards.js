
import React from 'react';
import "./Cards.css";
import pic1 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/pic1.png"
import pic2 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/pic2.png"
import pic3 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/pic3.png"
import pic4 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/pic4.png"
import pic5 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/pic5.png"
import pic6 from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/pic6.png"
import CardItem from "../CardItem/Project.js"


const Cards = () => {
  return (
    <div className='cards'>
      <h1 className="pageTitle">Check out my portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={pic2}
              title= "Project 3: mindflō"
              text='(MERN) Mongo, Express, React, Node, Bycrypt, Apexcharts, EmailJS'
              github ="https://github.com/youjmi/mindflo"
              deployed ="https://mindflo.herokuapp.com/"
            />
              <CardItem
              src={pic1}
              title= "Eddy: Employee Designated Directory"
              text='React and Axios'
              github ="https://github.com/youjmi/emp-dir"
              deployed ="https://youjmi.github.io/emp-dir/"
            />
            <CardItem
              src={pic3}
              title= "Workout Tracker and Dashboard App"
              text='Mongo, Express and Morgan'
              github ="https://github.com/youjmi/workout_Tracker-app"
              deployed ="https://rocky-falls-71528.herokuapp.com/"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={pic4}
              title= "Project 2: Bechdel Billboard"
              text='Express, Node, MySQL, Bcrypt'
              github ="https://github.com/youjmi/BechdelBillboard"
              deployed ="https://bechdelbillboard.herokuapp.com/"
            />
            <CardItem
              src={pic5}
              title= "Burger App"
              text='Node, Express, MySQL and HandleBars'
              github ="https://github.com/youjmi/burger-Logger_app"
              deployed ="https://yjk-burgerapp.herokuapp.com/"
            />
            <CardItem
              src={pic6}
              title= "Employee Tracker"
              text='Node, Inquirer, MySQL'
              github ="https://github.com/youjmi/employee_Tracker"
              deployed ="https://drive.google.com/file/d/1mlAl1Db10I4w3rwA4OJeufxc71HdvjHd/view"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards