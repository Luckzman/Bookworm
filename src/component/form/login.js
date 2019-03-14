import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {}
    };
  }

  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (!Validator.isEmail(data.email)) errors.email = "Must be email";
    return errors;
  };

  handleSubmit = () => {
    const { data } = this.state;
    const errors = this.validate(data);
    this.setState({ errors });
    this.props.submit(data);
  };

  handleChange = e => {
    const { data } = this.state;
    const { name, value } = e.target;
    this.setState({
      data: {
        ...data,
        [name]: value
      }
    });
    console.log(data);
  };
  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.handleChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={data.password}
            onChange={this.handleChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
    );
  }
}

Login.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Login;
