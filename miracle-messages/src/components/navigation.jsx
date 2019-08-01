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
            <NavLink className="nav-link" to="/login">Log in</NavLink >
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/volunteer-signup">Volunteer</NavLink >
          </li>
        </ul>
      </div>
    </nav>
         );
    }
}
 
export default Navigation;