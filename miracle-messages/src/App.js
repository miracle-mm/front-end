import React from 'react';
import {Route, Switch} from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";
import Home from "./components/home.jsx";
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Switch>
      
        <Route path="/volunteer-signup" component={Signup} />
        <Route path="/login"  component={Login}/>
        <Route path="/" component={Home} />
        
     
      </Switch>
      
    </React.Fragment>
  );
}

export default App;
