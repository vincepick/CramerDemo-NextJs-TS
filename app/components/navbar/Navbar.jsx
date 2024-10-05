'use client'
import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/cramerLogo.png';
import './navbar.css';

const Menu = () => (
  <>

  <p><a href="#home">Home</a></p>
  <p><a href="#wcramer">Why Cramer?</a></p>
  <p><a href="#possibility">Cramer Expertise</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Blog</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="cramer__navbar">
      <div className="cramer_navbar-links">
        <div className="cramer__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="cramer__navbar-links_container">
        <Menu />
      </div>
      <div className="cramer__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
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
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>

        )}
      </div>
    </div>
  )
}


export default Navbar
