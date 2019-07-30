import React, { Component } from "react";
import CheckBox from "./common/checkbox.jsx";
import Input from "./common/input.jsx";
import InputBox from "./common/inputBox.jsx";
import US_States from "./common/unitedStates.js";
import SelectBox from "./common/selectBox.jsx";
import axios from "axios";

class Signup extends Component {
    
  constructor(props) {
    super(props);
    this.ipstackAPI = `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_STACK_API}`;
    this.state = {
      inputFields: {
        name: "",
        city:"",
        usState:"AL",
        phoneNumber: "",
        emailAddress: "",
        password:"",
        streetAddress: "",
        tellUs:"",
        boxes: {
          recieveMessages: false,
          donate: false,
          volunteer: false,
          findWork: false
        },
      
      },
      latlong:{
        latitude:"",
        longitude:"",
      },
      messages: [
        {
          msg: "Notify when members in my area are in need of help",
          name: "recieveMessages"
        },
        { msg: "Donate Money/Food/Items to nearby members", name: "donate" },
        { msg: "Volunteer at a local shelter", name: "volunteer" },
        { msg: "Seek out job opportunities for members", name: "findWork" }
      ]
    };

  }
  async componentDidMount() {
    const {data} = await axios.get(this.ipstackAPI);
    const latlong = {...this.state.latlong};
    latlong.latitude = data.latitude;
    latlong.longitude = data.longitude;
    this.setState({latlong});
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
    e.stopPropagation();
   
  }
  render() {
    const {handleChange, handleSubmit, handleCheck} = this;
    console.log(this.state)
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            name={"name"}
            handleChange={handleChange}
            label={"Full Name"}
          />
          <Input
            type={"email"}
            name={"emailAddress"}
            handleChange={handleChange}
            label={"Email"}
          />
          <Input
            type={"phone"}
            name={"phoneNumber"}
            handleChange={handleChange}
            label={"phone"}
          />
          <Input
            type={"text"}
            name={"city"}
            handleChange={handleChange}
            label={"City"}
          />
            <SelectBox  label={"State"} name={"usState"} array={US_States}  handleChange={handleChange}/>
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
           <InputBox name={"tellUs"} handleChange={handleChange}/>
          <button type="button" className="btn btn-md mb-2 btn-primary float-right">Submit</button>
         
        </form>
      </div>
    );
  }
}

export default Signup;
