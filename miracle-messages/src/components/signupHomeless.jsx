import React, { Component } from "react";
import CheckBox from "./common/checkbox.jsx";
import Input from "./common/input.jsx";
import InputBox from "./common/inputBox.jsx";
import US_States from "./common/unitedStates.js";
import SelectBox from "./common/selectBox.jsx";
import Button from "./common/button.jsx";
import {getIP} from "./services/ipLocation.js";
import axiosWithAuth from "./services/axiosWithAuth.js";
import axios from "axios";

class SignupHomeless extends Component {
    
  constructor(props) {
    super(props);
    this.ipstackAPI = `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_STACK_API}`;
    this.state = {
      services:{
        getLatLong:getIP,
      },
      inputFields: {
        firstName: "",
        lastName: "",
        city:"",
        country:"",
        state:"AL",
        zip:null,
        tellUs:"",
        boxes: {
          sendMessages: false,
          needDonate: false,
          needShelter: false,
          willWork: false
        },
      
      },
      latlong:{
        latitude:"",
        longitude:"",
      },
      messages: [
        {
          msg: "Notify volunteers in my area when I am in need of help",
          name: "sendMessages"
        },
        { msg: "I am in need of Money/Food/Items ", name: "needDonate" },
        { msg: "I need a place to stay", name: "needShelter" },
        { msg: " I am willing to work should a volunteer find me work", name: "willWork" }
      ]
    }

  }
  componentDidMount() {
    this.state.services.getLatLong().then(response => {
     const { data } = response;
     const latlong = { ...this.state.latlong };
     latlong.latitude = data.latitude;
     latlong.longitude = data.longitude;
     this.setState({ latlong });

   })
 
 }
 
  handleCheck = e => {
    const { boxes } = this.state.inputFields;
    boxes[e.target.name] = !boxes[e.target.name];
    this.setState({ boxes });
  };
  handleChange = e => {
   
    const { inputFields } = this.state;
    inputFields[e.target.name] = e.target.value;
    
    this.setState({ inputFields });
  };
  handleSubmit = e => {
    e.preventDefault();
    
    //axiosWithAuth
const {firstName, lastName, city, state, zip, } = this.state.inputFields;
const {latitude, longitude} = this.state.latlong;
const newHomeless = { firstName, lastName, city, state, zip, latitude, longitude};
console.log(newHomeless);
axios.post("https://miracle-messages-map.herokuapp.com/api/homeless", newHomeless)
.then(response => {
console.log(response);
this.props.history.push("/dashboard");
}).catch(error =>{
console.log(error);
})
  }
  render() {
    const {handleChange, handleSubmit, handleCheck} = this;
    console.log("signupHomeless.jsx state", this.state);
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            name={"firstName"}
            handleChange={handleChange}
            label={"First Name"}
            />
          <Input
            type={"text"}
            name={"lastName"}
            handleChange={handleChange}
            label={"Last Name"}
          />
          <Input
            type={"number"}
            name={"zip"}
            handleChange={handleChange}
            label={"Zip Code"}
          />
          <Input
            type={"text"}
            name={"city"}
            handleChange={handleChange}
            label={"City"}
          />
           <Input
            type={"text"}
            name={"country"}
            handleChange={handleChange}
            label={"Country"}
          />
            <SelectBox  label={"State"} name={"state"} array={US_States}  handleChange={handleChange}/>

          <label htmlFor="checkbox">Select all valid options for you</label>
          {this.state.messages.map((m, index) => {
            return (
              <CheckBox
                handleCheck={handleCheck}
                name={m.name}
                key={index}
                message={m.msg}
                number={index}
              />
            );
          })}
           <InputBox name={"tellUs"} handleChange={handleChange}/>
          <Button type="button" className="btn btn-md mb-2 btn-primary float-right">Submit</Button>
         
        </form>
      </div>
    );
  }
}

export default SignupHomeless;
