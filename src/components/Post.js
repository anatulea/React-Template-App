import React, { useContext } from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { deletePostById } from "../services/posts";
import { UserContext } from "../context/userContext";

const Post = ({ post }) => {
  const { posts, setPosts } = useContext(UserContext);

  const deletePost = () => {
    deletePostById(post.id);
    setPosts(posts.filter((item) => item.id !== post.id));
  };
  return (
    <Card key={post.id} data-index={post.i}>
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
        <Button onClick={deletePost}>Delete</Button>
      </Card.Content>
    </Card>
  );
};
export default Post;
