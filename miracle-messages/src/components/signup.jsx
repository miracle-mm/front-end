import React, { Component } from "react";
import CheckBox from "./common/checkbox.jsx";
import Input from "./common/input.jsx";
import InputBox from "./common/inputBox.jsx";

class Signup extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inputFields: {
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        password:"",
        passwordComfirm:"",
        streetAddress: "",
        tellUs:"",

        boxes: {
          recieveMessages: false,
          donate: false,
          volunteer: false,
          findWork: false
        }
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
    const {handleChange} = this;
   
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Input
            type={"text"}
            name={"fullName"}
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
            name={"streetAddress"}
            handleChange={handleChange}
            label={"Street Address"}
          />
          <Input
            type={"password"}
            name={"password"}
            handleChange={handleChange}
            label={"Password"}
          />
          <Input
            type={"password"}
            name={"passwordComfirm"}
            handleChange={handleChange}
            label={"Type in password again"}
          />

          <label htmlFor="checkbox">Select all valid options for you</label>
          {this.state.messages.map((m, index) => {
            return (
              <CheckBox
                handleCheck={this.handleCheck}
                name={m.name}
                key={index}
                message={m.msg}
                number={index}
              />
            );
          })}
           <InputBox name={"tellUs"} handleChange={handleChange}/>
          <button type="button" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
