import React from 'react';
import {Route, Switch} from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import Signup from "./components/signup.jsx";
import './App.css';
import Login from "./components/login.jsx";


function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Switch>
        <Route path="/volunteer-signup" component={Signup} />
        <Route path="/login"  component={Login}/>
     
      </Switch>
      
    </React.Fragment>
  );
}

export default App;
