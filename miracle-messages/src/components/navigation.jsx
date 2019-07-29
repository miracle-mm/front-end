import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Navigation extends Component {
 
    render() { 
        return ( 

            <nav className="navbar navbar-expand navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">Miracle Messages</NavLink >
     

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/signup">Sign up</NavLink >
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/volunteer-signup">Volunteer</NavLink >
          </li>
        </ul>
      </div>
    </nav>
            // <nav>
                
            //     <NavLink  to="/">Miracle Messages</NavLink>
               
            //         <NavLink  to="/volunteer-signup">Volunteer</NavLink>
             
            //         <NavLink  to="/signup">Sign Up</NavLink>
              
            // </nav>
         );
    }
}
 
export default Navigation;