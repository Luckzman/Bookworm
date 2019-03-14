import React, { Component } from "react";
import Login from "../form/login";

class LoginPage extends Component {
  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="ui container">
        <h1>Login Page</h1>
        <Login submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
