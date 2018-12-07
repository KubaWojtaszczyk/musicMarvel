import React from "react";
import {NavLink} from "react-router-dom";




const Navigation = () => {
    return (
      <div style={{backgroundColor:"#DA727E", color:"#455C7B", fontSize:"20px", paddingLeft:"10px", paddingRight:"10px", width: "100%"}}>
          <nav className="navbar navbar-expand-lg navbar-light" >
              <NavLink className="navbar-brand" to="/">Home</NavLink>
               <ul className="navbar-nav">
                 <li className="nav-item">
                   <NavLink className="nav-link" to="/marvel">Marvel</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/more">More</NavLink>
                  </li>
                </ul>
          </nav>
      </div>
    );

}

export default Navigation;