import React, { useState, useEffect, useRef } from 'react'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import "../Css/SideNav.css"
import Logo from "../images/image 1.png"

const SideNav = () => {
  const [menu, setMenu] = useState(false)

  let menuRef = useRef();

  useEffect(()=>{
    document.addEventListener('mousedown', (event)=>{
      if(!menuRef.current.contains(event.target)){
        setMenu(false)
      }
    })
  })

 console.log(menu);
  return (
    <div className='sidebar' ref={menuRef}>
        <div className="left-logo">
        <img src={Logo} alt="" />
        </div>
      <div className="menu">
        <div className="img-side" onClick={()=>{
          setMenu(!menu)
        }}>
          {menu ? (<img src={close} alt="" className='open'/>) : (<img src={hamburger} alt="" className='close' />)}
        </div>
       {menu ?  (<div className="side">
        <ul>
           <a href="#hero" style={{textDecoration:"none"}}>
           <li>Home</li>
           </a>
          <a href="#portfolio" style={{textDecoration:"none"}}>
          <li>Portfolio</li>
          </a>
          <a href="#about" style={{textDecoration:"none"}}>
          <li>About Me</li>
          </a>
           <a href="#tes" style={{textDecoration:"none"}}>
           <li>Testimonials</li>
           </a>
        </ul>
      </div>) :
      
    (null )}
       
      </div>

      
    </div>
  )
}

export default SideNav