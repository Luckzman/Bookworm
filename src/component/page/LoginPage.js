import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "../form/login";
import { login } from "../../actions/auth";

class LoginPage extends Component {
  submit = data =>
    this.props.login(data).then(() => this.props.histroy.push("/"));

  render() {
    return (
      <div className="ui container">
        <h1>Login Page</h1>
        <Login submit={this.submit} />
      </div>
    );
  }
}

Login.propTypes = {
  histroy: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginPage);
