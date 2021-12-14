import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Card>
      <Card.Content textAlign="left">
        <Card.Header>{post.title}</Card.Header>
        <Card.Meta>{post.author}</Card.Meta>
        <Card.Meta textAlign="right">{post.date}</Card.Meta>
        <Card.Description>{post.description}</Card.Description>
        <br />
        <Button> Read more </Button>
      </Card.Content>
      <Card.Content extra textAlign="left">
        <Icon name="like" />
        {post.likes_count} likes <Link to="/edit-post">Edit</Link>{" "}
        <Link to="/dashboard">Delete</Link>
      </Card.Content>
    </Card>
  );
};
export default Post;
