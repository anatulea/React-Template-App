import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header } from "semantic-ui-react";
const Register = () => {
  return (
    <Form>
      <Header as="h3">Register Form</Header>
      <Form.Field>
        <input placeholder="Username" />
      </Form.Field>
      <Form.Field>
        <input placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <input placeholder="Password" />
      </Form.Field>
      <Form.Field>
        <input placeholder="Confirm Password" />
      </Form.Field>
      <Button type="submit">Register</Button>
      <Header as="h5">
        Already have an account? <Link to="/login">Login</Link>{" "}
      </Header>
    </Form>
  );
};
export default Register;
