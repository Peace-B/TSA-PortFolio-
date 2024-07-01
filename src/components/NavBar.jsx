import React from 'react'
import Logo from "../images/image 1.png"
import "../Css/NavBar.css"

const NavBar = () => {
  return (
    <>
      <div className="header sticky-top">
        <div className="header-logo">
           <img src={Logo} alt="" />
           <span>JohnDev,</span>
        </div>
        <ul className='header-list'>
           <a href="#hero">
           <li>Home</li>
           </a>
          <a href="#portfolio">
          <li>Portfolio</li>
          </a>
          <a href="#about">
          <li>About Me</li>
          </a>
           <a href="#tes">
           <li>Testimonials</li>
           </a>
        </ul>
        <button className='nav-btn'><a href="#contact">Contact Me</a></button>
      </div>
    </>
  )
}

export default NavBar