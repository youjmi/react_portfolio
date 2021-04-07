import React from "react";
import Container from "../components/Container";
import { Alert } from 'reactstrap';


import emailjs from "emailjs-com"
// import { Card } from "reactstrap";

import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


export default function ContactUs() {
 
    
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_odmwhml', 'template_rc5ezwc', e.target, 'user_QlbbuvmjU5H43y9wzxGc0') //
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }
    


    const handleOnClickDefault = () => {
        
        store.addNotification({
            title: "Email Sent!",
            message :" Thank you for your message! I will be in touch within 1 business day.",
            type: "info",
            container :"top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
        })
    }


    return (
        <>
        <ReactNotification/>
        <Container style ={{marginTop: 40}}>
      <form className="contact-form contact-holdbox" onSubmit={sendEmail}>
      <h1 className ="pageTitle pt-5"> CONTACT ME HERE</h1>
          <div className ="row pt-5 mx-auto">
              <div className ="col-8 form-group mx-auto">
                  <input type ="text" className="form-control" placeholder="Subject" name="subject"  />
              </div>
              <div className ="col-8 form-group mx-auto">
                  <input type ="text" className="form-control emailConfirm" placeholder="Email" name="email"   />
              </div>
              <div className ="col-8 form-group mx-auto">
                  <input type ="text" className="form-control" placeholder="Name" name="name"   />
              </div>
              <div className ="col-8 form-group mx-auto">
                  <textarea type ="text" className="form-control" placeholder="Write your message here..." name="message"   />
              </div>
              <div className ="py-5 col-8 form-group mx-auto">
                  <input type ="submit" onClick={handleOnClickDefault}  className="btn btn-info" value="Send Message"   />
              </div>
          </div>
      </form>
      </Container>
      </>
      





    

    );
  }