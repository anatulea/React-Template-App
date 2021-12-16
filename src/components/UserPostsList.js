import React, { useContext } from "react";
import { Container, Card } from "semantic-ui-react";
import { UserContext } from "../context/userContext";
import UserPost from "./UserPost";

const UserPostsList = () => {
  const { userPosts } = useContext(UserContext);
  // console.log(`posts in postList`, posts);
  return (
    <Container>
      <Card.Group itemsPerRow={1}>
        {userPosts.map((post) => (
          <UserPost post={post} key={post.id} />
        ))}
      </Card.Group>
    </Container>
  );
};
export default UserPostsList;
