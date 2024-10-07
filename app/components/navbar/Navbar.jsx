'use client'
import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/cramerLogo.png';
import './navbar.css';
import LoginButton from "../LoginButton/LoginButton";
import UsersLink from "../UsersLink/UsersLink";



const Menu = () => (
  <>
  <p><a href="/#home">Home</a></p>
  <p><a href="/#wcramer">Why Cramer?</a></p>
  {/* <p><a href="#possibility">Cramer Expertise</a></p> */}
  <p><a href="/#features">Case Studies</a></p>
  {/* <p><a href="/#footer">Contact</a></p> */}
  <p><a href="/SignUp">Sign Up</a></p>
  {/* <UsersLink /> */}
    
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="cramer__navbar">
      <div className="cramer_navbar-links">
   
      </div>
      <div className="cramer__navbar-links_container">
        <Menu />
        {/* <UsersLink /> */}
        

      </div>
      <div className="cramer__navbar-sign">
        <LoginButton />
        <UsersLink />
      </div>
      
      <div className="cramer__navbar-menu"> 
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
            <div className="cramer__navbar-menu_container swing-top-right-fwd">
              <div className="cramer__navbar-menu_container-">
                <Menu />
                <div className="cramer__navbar-menu_container-links-sign">
                  <LoginButton />
                  
                </div>
              </div>
            </div>

        )}
      </div>
    </div>
  )
}


export default Navbar
