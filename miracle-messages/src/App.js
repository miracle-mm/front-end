import React from 'react';
import {Route} from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import Signup from "./components/signup.jsx";
import SignupHomeless from "./components/signupHomeless.jsx";
import Login from "./components/login.jsx";
import Home from "./components/home.jsx";
import HomelessDashboard from "./components/homelessDashboard.jsx";
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Navigation/>
        <Route  path="/" component={Home} />
        <Route path="/dashboard" component={HomelessDashboard}/>
        <Route path="/volunteer-signup" component={Signup} />

        <Route path="/help" component={SignupHomeless} />
        <Route path="/login"  component={Login}/>
        {/* <Route exact path="/account" component={}/> */}

      
    </React.Fragment>
  );
}

export default App;
