import React from 'react';
import cramerLogo from '../../assets/cramerLogo.png';
import './footer.css';

const Footer = () => (
  <div className="cramer__footer section__padding">
    <div className="cramer__footer-heading">
      {/* <h1 className="gradient__text">Don't Forget To Sign Up To Our Mailing List</h1> */}
      
    </div>

    <div className="cramer__footer-btn">
      <p>Request A Consultation</p>
    </div>

    <div className="cramer__footer-links">
      <div className="cramer__footer-links_logo">
        {/* <img src={cramerLogo} alt="cramer_logo" /> */}
        <p>7525 NE Ambassador Pl., Suite C
        Portland, OR 97220 <br /> All Rights Reserved</p>
      </div>
      <div className="cramer__footer-links_div">
        <h4>Locations</h4>
        <p>Oregon</p>
        <p>Idaho</p>
        <p>Washington</p>
        <p>California</p>
      </div>
      <div className="cramer__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="cramer__footer-links_div">
        <h4>Get in touch</h4>
        <p>Phone (888) 224-1221</p>
        <p>Fax (503) 491-9577</p>
      </div>
    </div>

    <div className="cramer__footer-copyright">
      <p>©2024 Cramer Fish Sciences. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;