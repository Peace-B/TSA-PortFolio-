import React from 'react'
import '../Css/Footer.css'
import Logo from "../images/image 1.png"
import FaceI from "../images/Vector (7).png"
import InstaI from "../images/Vector (9).png"
import TwitI from "../images/Vector (10).png"
import LinkI from "../images/Vector (11).png"

const footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-nav">
          <div className="logo">
             <img src={Logo} alt="" />
             <span>JohnDev,</span>
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#tes">Testimonials</a></li>
            <li><a href="#skills">Portfolio</a></li>
          </ul>
          <div className="socials">
            <a href=""><img src={FaceI} alt="" /></a>
            <a href=""><img src={InstaI} alt="" /></a>
            <a href=""><img src={TwitI} alt="" /></a>
            <a href=""><img src={LinkI} alt="" /></a>
          </div>
        </div>
        <div className="line"></div>
        <div className="bottom-footer">
          <p>Made with 💗 by Peace</p>
          <div className="made">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Services</a>
            <a href="">Cookies Settings</a>
          </div>
        </div>
    </div>
  )
}

export default footer