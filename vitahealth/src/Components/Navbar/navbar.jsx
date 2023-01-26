import React from 'react'
import { Link } from 'react-router-dom'

import {FaBars} from "react-icons/fa"
import './navbar.css'
import { useState } from 'react'
import Navlinks from './navlinks'



const Navbar = () => {
  
  const[click,setClick]=useState(false);

  const[color,setColor] = useState(false)
  const changeColor = () =>{
      if(window.scrollY >= 100)
        {setColor(true);}
        else {setColor(false);}
  };
  window.addEventListener("scroll",changeColor);

  return (
    <div className="Navbar">
        <div className="logo">
            <h1>Prega-X</h1>
        </div>
      <div className="navlinks">
      <ul>
            <li> <Link to="/">
            Home
            </Link>
                 </li>
            <li>
                <Link to="/trimester">
                Trimester   </Link>
            </li>
            
            <li>
                <Link
                to="/todo">
                Planner   </Link>
                
              </li>
            
            <li>
              
              <Link to="/chat">Chat</Link>
                </li>
           
                <a href=""><FaBars className="hamburger" onClick={()=>setClick(!click)} /></a>
                <div>
                  {click &&<Navlinks />}
                </div>

            
        </ul>
      </div>
        
        
                
              
    </div>
  )
}

export default Navbar