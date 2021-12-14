import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header } from "semantic-ui-react";

const Login = () => {
  return (
    <Form>
      <Header as="h3">Login Form</Header>
      <Form.Field>
        <input placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <input placeholder="Password" />
      </Form.Field>
      <Button type="submit">Login</Button>
      <Header as="h5">
        Don't have an account? <Link to="/register">Register</Link>{" "}
      </Header>
    </Form>
  );
};
export default Login;
