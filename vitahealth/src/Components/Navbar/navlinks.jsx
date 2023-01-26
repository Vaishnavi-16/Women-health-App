import React from "react";
import "./navlink.css"

const Navlinks=() =>{
 return(
    <div className="ham-menu">
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
                </ul>
    </div>
 )

}

export default Navlinks;