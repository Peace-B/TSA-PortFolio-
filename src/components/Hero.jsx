import React from 'react'
import NavBar from './NavBar'
import "../Css/Hero.css"
import Footer from "../components/Footer"
import HeroImg from "../images/Group 11 1.png"
import Phoneimg from "../images/Vector (1).png"
import TagImg from "../images/tag 1.png"
import TestImg from "../images/carbon_ibm-engineering-test-mgmt.png"
import CloudImg from "../images/feather-pen 1 (1).png"
import AboutImg from "../images/About Me.png"
import ArrImg from "../images/Vector (3).png"
import GitImg from "../images/mdi_github.png"
import Blog1 from "../images/image1.png"
import Blog2 from "../images/Image.png"
import Blog3 from "../images/image2.png"
import Stars from "../images/Stars.png"
import Img1 from "../images/Avatar Image (1).png"
import Img2 from "../images/Avatar Image (2).png"
import Img3 from "../images/Avatar Image.png"
import Form from 'react-bootstrap/Form';
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import SideNav from './SideNav'

const Hero = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a5omy7u', 'template_jhvzysl', form.current, {
        publicKey: 'ZnUpE7zWi6n_KeSea',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <div className='container'>
      <NavBar/>
      <SideNav/>
      {/* HERO SECTION */}
      <div id="hero">
          <div className="hero-content">
             <h5>Hey, I am John</h5>
             <h2>I develop dynamic and User-Centered Web Applications</h2>
             <p>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
             <button><a href="#contact">Get In Touch</a></button>
          </div>
          <div className="hero-img">
              <img src={HeroImg} alt="Hero"/>
      </div>
      </div>
   {/* SKILLS SECTION */}
         <div id="skills">
          <div className="skill-header">
            <h6>My Skills</h6>
            <h2>My Experties</h2>
          </div>

          <div className='skills-list'>
              <div className='skills-card'>
             <div className="special-img">
             <img src={Phoneimg} alt="" />
             </div>
                 <h4>Responsive Design</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
               </div>
               <div className='skills-card'>
                 <div className="skills-img">
                 <img src={TagImg} alt="" />
                 </div>
                 <h4>Front-End Frameworks</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
               </div>
               <div className='skills-card'>
                  <div className="skills-img">
                  <img src={TestImg} alt="" />
                  </div>
                 <h4>Testing and Debugging</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
               </div>
               <div className='skills-card'>
                  <div className="skills-img">
                  <img src={CloudImg} alt="" />
                  </div>
                 <h4>Cloud Services</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
               </div>
          </div> 
    </div>

     {/* ABOUT SECTION */}
     <div id="about">
     <div className="about-body">
     <div className="about-img">
        <img src={AboutImg} alt="" />
        </div>
        <div className="about-con">
          <h6>About</h6>
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
          <p>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
        </div>
     </div>
     </div>
    
    {/* PORTFOLIO SECTION */}
    <div id="portfolio">
      <div className="portfolio-header">
        <div className="">
        <h6>Recent Projects</h6>
        <h2>My Portfolio</h2>
        </div>
        <button className='git'>
        <img src={GitImg} alt="" />
          <a href="https://github.com/">Visit My GitHub</a>
        </button>
      </div>
         <div className="port-blog">
              <div className='bog-con'>
              <div className='blog'>
              <img src={Blog2} alt="" />
              </div>
                  <h6>Ahuse</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  <div className='view'>
                  <a href="">View Project</a>
                  <img src={ArrImg} alt="" />
                  <div className="arr"></div>
                  </div>
              </div>
              <div className='bog-con'>
              <div className='blog'>
              <img src={Blog1} alt="" />
              </div>
                  <h6>App Dashboard</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  <div className='view'>
                  <a href="">View Project</a>
                  <img src={ArrImg} alt="" />
                  <div className="arr"></div>
                  </div>
              </div>
              <div className='bog-con'>
              <div className='blog'>
              <img src={Blog3} alt="" />
              </div>
                  <h6>Easy Rent</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  <div className='view'>
                  <a href="">View Project</a>
                  <img src={ArrImg} alt="" />
                  <div className="arr"></div>
                  </div>
              </div>
         </div>
    </div>

  {/* TESTIMONIALS */}
  <div id="tes">
      <div className="tes-header">
        <h6>Clients Feedback</h6>
        <h1>Client Testimonials</h1>
      </div>
      <div className="tes-card">
        <div className="card-content">
          <div className="up-content">
          <img src={Stars} alt="" />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
          </div>
          <div className="down-content"> 
            <img src={Img3} alt="" />
            <div className="user-info">
              <h6>Daniel Russels</h6>
              <span>Starbucks</span>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="up-content">
          <img src={Stars} alt="" />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
          </div>
          <div className="down-content">
          <img src={Img1} alt="" />
            <div className="user-info">
              <h6>Kristin Watson</h6>
              <span>Louis Vuitton</span>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="up-content">
          <img src={Stars} alt="" />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
          </div>
          <div className="down-content">
          <img src={Img2} alt="" />
            <div className="user-info">
              <h6>Kathryn Murphy</h6>
              <span>MacDonald's</span>
            </div>
          </div>
        </div>
      </div>
  </div>
 {/* CONTACT */}
     <div id="contact">
      <div className="contact-body">
      <div className="contact-intro">
        <h6>Get In Touch</h6>
        <h2>Contact Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="con-form" >
          <div className="first-n">
          <label htmlFor="">First name</label>
          <input type="text" name='user_name' required/>
          </div>
          <div className="first-n">
          <label htmlFor="">Last name</label>
          <input type="text" name='user_last_name' required/>
          </div>
          <div className="first-n">
          <label htmlFor="">Email</label>
          <input type="email" name='user_email' required/>
          </div>
          <div className="first-n">
          <label htmlFor="">Phone number</label>
          <input type="text" required/>
          </div>
        </div>
        <div className="msg">
            <label htmlFor="text" for="mytext">Message</label>
            <textarea id='mytext' rows="8" cols="40" placeholder='Type your message.....'></textarea>
          </div>
          <div>
      <Form.Check className='radio' aria-label="option 1" label="I accept the Terms"/>
    </div>
    <button type="submit">Submit</button>
      </form>
      </div>

     </div>
     <Footer/>
    </div>
  )
}

export default Hero