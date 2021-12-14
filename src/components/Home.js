import React from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="home-page">
      <h1>Medium is a place </h1>
      <h1>to write, read, and</h1>
      <h1>connect</h1>
      <h3>
        It's easy and free to post your thinking on any topic and connect with
        millions of readers.
      </h3>

      <br />
      <Link to="/register">
        <Button primary>Get Started</Button>
      </Link>
    </Container>
  );
};
export default Home;
