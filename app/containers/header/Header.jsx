import React from 'react';
import '../../globals.css';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/vpbestlogo.png';
import Carousel from '../../components/carousel/Carousel';
import '../../components/carousel/carousel.css'




// import Feature from '../../components/feature/Feature'; 
// import { carousel01, carousel02, carousel03, carousel04, carousel05, carousel06, carousel07, carousel08 } from './imports';

// const images = [carousel01, carousel03, carousel04, carousel05, carousel06, carousel07, carousel08];

const Header = () => {
  return (
    <div className="cramer__header section__padding" id="home">
      <div className="cramer__header-content">
        <h1 className="gradient__text">
          Solving Natural Resource Challenges For Over 30 Years
        </h1>
        <p>Find out how our science and expertise can help you.</p>
        {/* <div className="cramer__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div> */}
        {/* <div className="cramer__header-content__people">
          <img src={people} alt="Group of people" />
          <p>300 million people requested access to join in the last 24 minutes</p>
        </div> */}
      </div>
      
      
      {/* <div className="cramer__header-image"> */}
        {/* <h1 className="gradient__text">This is the react carousel</h1> */}
        {/* <Carousel images={images}/> */}
        {/* <img src={ai} alt="Artificial Intelligence" /> */}
      {/* </div> */}
    </div>
  );
};

export default Header;