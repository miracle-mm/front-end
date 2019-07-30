import React, {Component} from "react";
import Input from "./common/input.jsx";
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
    e.stopPropagation();
   
  }
  render() {
    console.log(this.state.account);
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
          <button type="button" className="btn btn-primary">Enter</button>
        </form>
      </div>
    );
  }
}

export default Login;
