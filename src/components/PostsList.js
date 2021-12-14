import React from "react";
import { Container, Card } from "semantic-ui-react";
import Post from "./Post";

const PostsList = ({ posts }) => {
  return (
    <Container>
      <Card.Group itemsPerRow={1}>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </Card.Group>
    </Container>
  );
};
export default PostsList;
