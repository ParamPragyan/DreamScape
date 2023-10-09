import React from 'react'
import { useEffect } from "react";
import particles from "../../particlesjs-config";
import Contact from '../../components/Contact/Contact';
import "./ContactUs.scss"


const ContactUs = (props) => {
    useEffect(() => {
        tsParticles.load("particles", particles);
      });
  return (
    <div className='con'>
        <div className='con__header padding flex items-center justify-center' id='particles'>
            <h1 className='con__header__heading'>Contact Us</h1>
           
        </div>
        <div className='pp'>
                <Contact/>
            </div>


    </div>
  )
}

export default ContactUs