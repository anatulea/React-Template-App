import React, { useContext } from "react";
import { Container, Card } from "semantic-ui-react";
import { UserContext } from "../context/userContext";
import Post from "./Post";

const UserPostsList = () => {
  const { posts } = useContext(UserContext);
  // console.log(`posts in postList`, posts);
  return (
    <Container>
      <Card.Group itemsPerRow={1}>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Card.Group>
    </Container>
  );
};
export default UserPostsList;
