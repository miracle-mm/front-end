import React, { Component } from "react";
import CheckBox from "./common/checkbox.jsx";
import Input from "./common/input.jsx";
import InputBox from "./common/inputBox.jsx";
import US_States from "./common/unitedStates.js";
import SelectBox from "./common/selectBox.jsx";
import axios from "axios";

class SignupHomeless extends Component {
    
  constructor(props) {
    super(props);
    this.ipstackAPI = `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_STACK_API}`;
    this.state = {
      inputFields: {
        firstName: "",
        lastName: "",
        city:"",
        usState:"AL",
        zip:"",
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
          <h1>Laurem Ipsum on the right track to ipsum dolor oof naga is fulos nagris del otto vamin.</h1>
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
            name={"zipCode"}
            handleChange={handleChange}
            label={"Zip Code"}
          />
          <Input
            type={"text"}
            name={"city"}
            handleChange={handleChange}
            label={"City"}
          />
            <SelectBox  label={"State"} name={"usState"} array={US_States}  handleChange={handleChange}/>

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

export default SignupHomeless;
