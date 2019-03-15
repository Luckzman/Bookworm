import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
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

  handleSubmit = props => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
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
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">email</label>
          <input
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
