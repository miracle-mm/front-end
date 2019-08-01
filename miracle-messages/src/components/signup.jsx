import React, { Component } from "react";
import CheckBox from "./common/checkbox.jsx";
import Input from "./common/input.jsx";
import InputBox from "./common/inputBox.jsx";
import US_States from "./common/unitedStates.js";
import SelectBox from "./common/selectBox.jsx";
import Button from "./common/button.jsx";
import {getIP} from "./services/ipLocation.js";
import axios from "axios";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services:{
        getLatLong:getIP,
      },
      inputFields: {
        name: "",
        city: "",
        state: "AL",
        email: "",
        password: "",
        boxes: {
          volunteer: false,
          partnering: false,
          media: false,
          donate: false,
          somethingElse: false,
          join: false,
          partneringGovt: false,
          openings: false
        }
      },
      latlong: {
        latitude: null,
        longitude: null
      },
      messages: [
        { msg: "Volunteering", name: "volunteer" },
        { msg: "Partnering", name: "partnering" },
        { msg: "Media coverage", name: "media" },
        { msg: "Donating", name: "donate" },
        { msg: "Something else", name: "somethingElse" },
        { msg: "Joining the MM team", name: "join" },
        { msg: "Partnering (for orgs/govt/etc)", name: "partneringGovt" },
        { msg: "Openings at MM", name: "openings" }
      ]
    };
  }
 

  // componentDidMount() {
    
  //    this.state.services.getLatLong().then(response => {
  //     const { data } = response;
  //     const latlong = { ...this.state.latlong };
  //     latlong.latitude = data.latitude;
  //     latlong.longitude = data.longitude;
  //     this.setState({ latlong });
  //   })
  
  // }


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
  //weffwefw
  handleSubmit = e => {
    e.preventDefault();
    const {name, city, state, email, password } = this.state.inputFields;
    const {latitude, longitude} = this.state.latlong;
    const newPartner = {name, city, state, email,password ,latitude, longitude};
    console.log(newPartner);
    axios.post("https://miracle-messages-map.herokuapp.com/api/auth/register/", newPartner)
    .then(response => {
      console.log(response);
      this.props.history.push('/login')
    }).catch(error =>{
        console.log(error);
    })
  };
  render() {
    const { handleChange, handleSubmit, handleCheck } = this;
    console.log("signup.jsx state", this.state);
    return (
      <div className="container">
        <h1>
   
          By Joining our team you are making a difference!
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            name={"name"}
            handleChange={handleChange}
            label={"Full Name"}
          />
          <Input
            type={"email"}
            name={"email"}
            handleChange={handleChange}
            label={"Email"}
          />
    
          <Input
            type={"text"}
            name={"city"}
            handleChange={handleChange}
            label={"City"}
          />
          <SelectBox
            label={"State"}
            name={"state"}
            array={US_States}
            handleChange={handleChange}
          />
          <Input
            type={"password"}
            name={"password"}
            handleChange={handleChange}
            label={"Password"}
          />

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
          <InputBox name={"tellUs"} handleChange={handleChange} />

         
          <Button
            type="submit"
            className="btn btn-md mb-2 btn-primary float-right"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
