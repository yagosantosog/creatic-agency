import React, { useState } from 'react';
import './navbar.css';
import search from '../../assets/magnify.svg';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import Logo from '../logo/Logo';


function Menu() {
  return (
    <>
    <ul>
      <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About Us</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portifolio'>Portifolio</a></li>
      <li><a href='#pages'>Pages</a></li>
      <li><a href='#contact'>Contact Us</a></li>
    </ul>
    <div className="creatic__navbar-links_btn">
    <img src={search} alt="magnify" />
    </div>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='creatic__navbar'>
      <div className="creatic__navbar-container">
      <div className="creatic__navbar-logo">
        <Logo />
      </div>
      <div className="creatic__navbar-links">
        <Menu />
      </div>
      <div className="creatic__navbar-links_menu">
        {
          toggleMenu 
          ?
          <RiCloseLine size={27} color='#6D95FC' onClick={() => setToggleMenu(false)}/>
          :
          <RiMenu3Line size={27} color='#6D95FC' onClick={() => setToggleMenu(true)}/>
        }
        { toggleMenu && (
            <div className="creatic__navbar-container_menu scale-up-tr">
              <Menu />
            </div>
        )}
      </div>
      </div>
    </nav>
  )
}

export default Navbar
