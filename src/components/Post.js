import React from "react";
import { Card, Icon } from "semantic-ui-react";

const Post = ({ post }) => {
  return (
    <Card>
      <Card.Content textAlign="left">
        <Card.Header>{post.title}</Card.Header>
        <Card.Meta>{post.author}</Card.Meta>
        <Card.Meta textAlign="right">{post.date}</Card.Meta>
        <Card.Description>{post.description}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="left">
        <Icon name="like" />
        {post.likes_count} likes
      </Card.Content>
    </Card>
  );
};
export default Post;
