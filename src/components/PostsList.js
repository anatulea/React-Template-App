import React, { useContext } from "react";
import { Container, Card } from "semantic-ui-react";
import { PostsContext } from "../context/postsContext";
import Post from "./Post";

const PostsList = () => {
  const { posts } = useContext(PostsContext);
  console.log(`posts in post list`, posts);
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
export default PostsList;
