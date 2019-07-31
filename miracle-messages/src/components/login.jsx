import React, {Component} from "react";
import Input from "./common/input.jsx";
import Button from "./common/button.jsx";
import axios from "axios";
class Login extends Component {
  constructor() {
      super();
    this.state = {
      account: {
        email: "",
        password: ""
      }
    };
  }
  handleChange = e => {
    const { account } = this.state;
    account[e.target.name] = e.target.value;

    this.setState({ account });
  };
  handleSubmit = e => {
    e.preventDefault();
    const login = this.state.account;
    console.log(login);    
    axios.post("https://miracle-messages-map.herokuapp.com/api/auth/login", login)
    .then(response => {
      console.log(response);
      localStorage.setItem("token", response.data.token);
    }).catch(error => {
      console.log(error);
    })
  }
  render() {

    return (
       
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Input
            type={"text"}
            name={"email"}
            handleChange={this.handleChange}
            label={"Email"}
          />
          <Input
            type={"password"}
            name={"password"}
            handleChange={this.handleChange}
            label={"Password"}
          />
             <Button type="submit" className="btn btn-md mb-2 btn-primary float-right">Enter</Button>
        </form>
      </div>
  
    );
  }
}

export default Login;
