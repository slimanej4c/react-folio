import React ,{useState} from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
//  <NavLink className="nav-link" to="/">Profile</NavLink>
const  Navbar=() =>{
  const [active, setActive] = useState("nav");
  const [icon, setIcon] = useState("show");
  const navToggle = () => {
    if (active === "nav") {
      setActive("nav nav-animate");
    } else setActive("nav");

    // Icon Toggler
    if (icon === "show") {
      setIcon("show exit"); 
    } else setIcon("show");
  };
  return (
    <div className={active}>

       <div onClick={navToggle} className={icon} >
        <div className="line11"></div>
        <div className="line22"></div>
        <div className="line33"></div>
        </div>


        <div className='nav-container'>
            <ul className='nav-ul'>
            <Fragment>
                <li className='nav-item' onClick={navToggle}>
                <NavLink className="nav-link" to="/Profile">About</NavLink>
               
                </li>
                <li className='nav-item'  onClick={navToggle}>
                <NavLink className="nav-link" to="/">Contactt</NavLink>
                </li>
                <li className='nav-item'  onClick={navToggle}>
                <NavLink className="nav-link" to="/Deplome">Déplome et Formationn</NavLink>
                </li>
                <li className='nav-item'  onClick={navToggle}>
                <NavLink className="nav-link" to="/">Expérience Proffessionel</NavLink>
                </li>
            </Fragment>
            </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar