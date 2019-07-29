import React from 'react';
import {Route, Switch} from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import Signup from "./components/signup.jsx"
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Switch>
        <Route path="/volunteer-signup" render={(props) => {
         return  <Signup {...props} isVolunteer={true}/>
        }}  />
        <Route path="/signup" render={(props) => {
         return  <Signup {...props} isVolunteer={true}/>
        }}  />
        <Route path="/sign-up" />
        <Route path="login" />
        {/* <Route path="/" component={}/> */}
      </Switch>
      
    </React.Fragment>
  );
}

export default App;
